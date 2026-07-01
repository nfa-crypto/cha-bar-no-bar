// Netlify Function: gerencia quem marcou cada presente.
// GET    -> devolve o mapa de presentes ja marcados
// POST   -> tenta marcar um presente (id + nome de quem esta dando)
//           se ja estiver marcado, recusa (evita duplicidade)
// DELETE -> desmarca um presente (caso alguem tenha marcado por engano)
//
// Como evitamos duplicidade de verdade (mesmo se duas pessoas clicarem
// "marcar" no mesmo presente no mesmissimo instante):
// Cada presente marcado vira sua PROPRIA blob, com chave `claim:<id>`,
// gravada com a opcao `onlyIfNew: true`. O Netlify Blobs garante que, se duas
// gravacoes concorrentes tentarem criar a mesma chave ao mesmo tempo, so UMA
// delas "ganha" (a outra recebe `modified: false`).
//
// Nao usamos um unico "mapa" compartilhado pra guardar todos os presentes
// marcados. Em vez disso, ao listar (GET), buscamos todas as chaves
// `claim:*` e seus valores.

import { getStore } from "@netlify/blobs";

const STORE_NAME = "cha-bar-no-bar";
const PREFIX = "claim:";
const lockKey = (id) => `${PREFIX}${id}`;
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

async function listClaims(store) {
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
    const claims = await listClaims(store);
    return json({ claims }, 200);
  }

  if (req.method === "POST") {
    let body;
    try {
      body = await req.json();
    } catch {
      return json({ error: "JSON invalido" }, 400);
    }

    const { id, nome } = body || {};
    if (!id || !nome || !String(nome).trim()) {
      return json({ error: "Faltou o id do presente ou o nome de quem esta dando." }, 400);
    }

    const nomeLimpo = String(nome).trim().slice(0, 60);
    const claimValue = { nome: nomeLimpo, data: new Date().toISOString() };

    const lockResult = await store.setJSON(lockKey(id), claimValue, { onlyIfNew: true });

    if (!lockResult.modified) {
      const claims = await listClaims(store);
      return json(
        { error: "Esse presente ja foi marcado por outra pessoa.", claims },
        409
      );
    }

    const claims = await listClaims(store);
    return json({ ok: true, claims }, 200);
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
      return json({ error: "Faltou o id do presente." }, 400);
    }

    await store.delete(lockKey(id));
    const claims = await listClaims(store);
    return json({ ok: true, claims }, 200);
  }

  return json({ error: "Metodo nao suportado" }, 405);
};

export const config = {
  path: "/api/gifts"
};
