// Confirmação de presença (RSVP): cada convidado diz o nome e quantas
// pessoas vai levar (contando ele mesmo). Guardado no mesmo "servidor"
// (Netlify Function + Blobs) usado pelos presentes.
//
// Cada navegador tem um ID próprio (guardado no localStorage). Se a mesma
// pessoa enviar de novo (pra corrigir a quantidade, por exemplo), atualiza a
// confirmação dela em vez de criar uma duplicada.

const RSVP_API_URL = "/api/rsvp";
const RSVP_ID_KEY = "cha-bar-no-bar:rsvp-id";

function getOrCreateRsvpId() {
  let id = localStorage.getItem(RSVP_ID_KEY);
  if (!id) {
    id =
      "r" +
      Date.now().toString(36) +
      Math.random().toString(36).slice(2, 10);
    localStorage.setItem(RSVP_ID_KEY, id);
  }
  return id;
}

const rsvpForm = document.getElementById("rsvpForm");
const rsvpNomeInput = document.getElementById("rsvpNome");
const rsvpQtdInput = document.getElementById("rsvpQtd");
const rsvpBtn = document.getElementById("rsvpBtn");
const rsvpError = document.getElementById("rsvpError");
const rsvpCountEl = document.getElementById("rsvpCount");
const rsvpListEl = document.getElementById("rsvpList");

let myRsvpId = null;

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderRsvps(rsvps) {
  const entries = Object.entries(rsvps || {});
  const totalPessoas = entries.reduce((sum, [, r]) => sum + (Number(r.quantidade) || 0), 0);
  const totalConfirmacoes = entries.length;

  rsvpCountEl.innerHTML = totalConfirmacoes
    ? `🎊 <strong>${totalPessoas}</strong> pessoa${totalPessoas === 1 ? "" : "s"} confirmada${totalPessoas === 1 ? "" : "s"} (${totalConfirmacoes} confirmação${totalConfirmacoes === 1 ? "" : "ões"})`
    : "Seja a primeira pessoa a confirmar presença! 🎉";

  rsvpListEl.innerHTML = entries
    .sort((a, b) => (a[1].data || "").localeCompare(b[1].data || ""))
    .map(([id, r]) => {
      const isMe = id === myRsvpId;
      return `
        <span class="rsvp-pill" data-id="${id}">
          ${escapeHtml(r.nome)} <span class="qty">${r.quantidade}</span>
          ${isMe ? `<button type="button" data-action="cancel-rsvp" title="Cancelar minha confirmação">✕</button>` : ""}
        </span>
      `;
    })
    .join("");

  rsvpListEl.querySelectorAll('[data-action="cancel-rsvp"]').forEach((btn) => {
    btn.addEventListener("click", async () => {
      const ok = confirm("Cancelar sua confirmação de presença?");
      if (!ok) return;
      const result = await deleteRsvp(myRsvpId);
      if (result.ok) {
        renderRsvps(result.rsvps);
      } else {
        alert(result.error || "Não foi possível cancelar. Tente de novo.");
      }
    });
  });
}

async function loadRsvps() {
  try {
    const res = await fetch(RSVP_API_URL);
    const data = await res.json();
    renderRsvps(data.rsvps || {});
  } catch (err) {
    console.error("Erro ao carregar confirmações:", err);
    rsvpCountEl.textContent = "Não foi possível carregar as confirmações agora.";
  }
}

async function submitRsvp(id, nome, quantidade) {
  try {
    const res = await fetch(RSVP_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nome, quantidade })
    });
    const data = await res.json();
    if (!res.ok) return { ok: false, error: data.error };
    return { ok: true, rsvps: data.rsvps };
  } catch (err) {
    return { ok: false, error: "Erro de conexão. Confira sua internet e tente de novo." };
  }
}

async function deleteRsvp(id) {
  try {
    const res = await fetch(RSVP_API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    const data = await res.json();
    if (!res.ok) return { ok: false, error: data.error };
    return { ok: true, rsvps: data.rsvps };
  } catch (err) {
    return { ok: false, error: "Erro de conexão. Confira sua internet e tente de novo." };
  }
}

if (rsvpForm) {
  rsvpForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = rsvpNomeInput.value.trim();
    const quantidade = parseInt(rsvpQtdInput.value, 10);

    rsvpError.textContent = "";
    if (!nome) return;
    if (!quantidade || quantidade < 1) return;

    rsvpBtn.disabled = true;
    rsvpBtn.textContent = "Enviando...";

    const result = await submitRsvp(myRsvpId, nome, quantidade);

    rsvpBtn.disabled = false;
    rsvpBtn.textContent = "Confirmar presença";

    if (result.ok) {
      renderRsvps(result.rsvps);
    } else {
      rsvpError.textContent = result.error || "Não foi possível confirmar. Tente de novo.";
    }
  });

  (async function initRsvp() {
    myRsvpId = getOrCreateRsvpId();
    await loadRsvps();
  })();
}
