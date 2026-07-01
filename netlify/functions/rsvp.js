// Netlify Function: confirmacao de presenca (RSVP).
// GET    -> devolve todas as confirmacoes { [id]: { nome, quantidade, data } }
// POST   -> cria ou atualiza a confirmacao de um navegador (upsert por id)
// DELETE -> cancela a confirmacao de um navegador
//
// Diferente de gifts.js, aqui NAO precisamos impedir duplicidade entre
// pessoas diferentes (varias pessoas podem confirmar). O "id" identifica o
// navegador de quem esta confirmando (gerado no rsvp.js e guardado no
// localStorage), entao reenviar com o mesmo id apenas atualiza a mesma
// confirmacao (por exemplo, se a pessoa errou a quantidade).

import { getStore } from "@netlify/blobs";

const STORE_NAME = "cha-bar-no-bar";
const PREFIX = "rsvp:";
const rsvpKey = (id) => `${PREFIX}${id}`;
const idFromKey = (key) => key.slice(PREFIX.length);

function corsHeaders() {
    return {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Content-Type": "application/json"
    };
}

function json(body, status) {
    return new Response(JSON.stringify(body), { status, headers: corsHeaders() });
}

async function listRsvps(store) {
    const { blobs } = await store.list({ prefix: PREFIX });
    const entries = await Promise.all(
          blobs.map(async (b) => {
                  const value = await store.get(b.key, { type: "json" });
                  return [idFromKey(b.key), value];
          })
        );
    return Object.fromEntries(entries.filter(([, v]) => v));
}

export default async (req) => {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });

    if (req.method === "OPTIONS") {
          return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (req.method === "GET") {
          const rsvps = await listRsvps(store);
          return json({ rsvps }, 200);
    }

    if (req.method === "POST") {
          let body;
          try {
                  body = await req.json();
          } catch {
                  return json({ error: "JSON invalido" }, 400);
          }

      const { id, nome, quantidade } = body || {};
          const qtd = parseInt(quantidade, 10);

      if (!id || !String(id).trim()) {
              return json({ error: "Faltou identificar o navegador (id)." }, 400);
      }
          if (!nome || !String(nome).trim()) {
                  return json({ error: "Faltou o nome." }, 400);
          }
          if (!qtd || qtd < 1 || qtd > 15) {
                  return json({ error: "Quantidade de pessoas invalida (1 a 15)." }, 400);
          }

      const value = {
              nome: String(nome).trim().slice(0, 60),
              quantidade: qtd,
              data: new Date().toISOString()
      };

      await store.setJSON(rsvpKey(String(id).trim()), value);

      const rsvps = await listRsvps(store);
          return json({ ok: true, rsvps }, 200);
    }

    if (req.method === "DELETE") {
          let body;
          try {
                  body = await req.json();
          } catch {
                  return json({ error: "JSON invalido" }, 400);
          }

      const { id } = body || {};
          if (!id) {
                  return json({ error: "Faltou identificar o navegador (id)." }, 400);
          }

      await store.delete(rsvpKey(String(id).trim()));
          const rsvps = await listRsvps(store);
          return json({ ok: true, rsvps }, 200);
    }

    return json({ error: "Metodo nao suportado" }, 405);
};

export const config = {
    path: "/api/rsvp"
};
