// Lógica do site: junta a lista de presentes (gifts-data.js) com o que já
// foi marcado (guardado no servidor via Netlify Function), e permite marcar
// / desmarcar sem duplicidade.

const API_URL = "/api/gifts";

let claims = {};
let activeCategory = "todos";

const giftGrid = document.getElementById("giftGrid");
const statusBar = document.getElementById("statusBar");
const filtersEl = document.getElementById("filters");

function categories() {
  const set = new Set(GIFTS.map((g) => g.categoria));
  return ["todos", ...set];
}

function renderFilters() {
  filtersEl.innerHTML = "";
  categories().forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
    btn.textContent = cat === "todos" ? "Todos" : cat;
    btn.addEventListener("click", () => {
      activeCategory = cat;
      renderFilters();
      renderGifts();
    });
    filtersEl.appendChild(btn);
  });
}

function renderStatusBar() {
  const total = GIFTS.length;
  const marcados = GIFTS.filter((g) => claims[g.id]).length;
  statusBar.textContent = `${marcados} de ${total} presentes já marcados`;
}

function giftCardHTML(gift) {
  const claim = claims[gift.id];
  const isClaimed = Boolean(claim);

  const imageHtml = gift.imagem
    ? `<img src="${gift.imagem}" alt="${gift.nome}" style="width:100%;border-radius:10px;max-height:140px;object-fit:cover;">`
    : "";

  const bodyHtml = isClaimed
    ? `
      <div class="claimed-box">
        🎁 Marcado por <span class="who">${escapeHtml(claim.nome)}</span>
        <br>
        <button class="link-btn" data-action="unclaim" data-id="${gift.id}">
          não fui eu / desmarcar
        </button>
      </div>
    `
    : `
      <form class="claim-form" data-id="${gift.id}">
        <input type="text" name="nome" placeholder="Seu nome" required maxlength="60">
        <button type="submit" class="btn">Marcar</button>
      </form>
      <div class="error-msg" data-error-for="${gift.id}"></div>
    `;

  return `
    <div class="gift-card ${isClaimed ? "claimed" : ""}" data-card-id="${gift.id}">
      <span class="tag">${gift.categoria}</span>
      ${imageHtml}
      <h3>${gift.nome}</h3>
      <a class="link" href="${gift.link}" target="_blank" rel="noopener">Ver produto ↗</a>
      ${bodyHtml}
    </div>
  `;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderGifts() {
  const list = GIFTS.filter(
    (g) => activeCategory === "todos" || g.categoria === activeCategory
  );
  giftGrid.innerHTML = list.map(giftCardHTML).join("");
  renderStatusBar();
  attachHandlers();
}

function attachHandlers() {
  giftGrid.querySelectorAll("form.claim-form").forEach((form) => {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const id = form.getAttribute("data-id");
      const nome = form.nome.value.trim();
      if (!nome) return;

      const btn = form.querySelector("button");
      btn.disabled = true;
      btn.textContent = "Marcando...";

      const result = await claimGift(id, nome);

      if (result.ok) {
        claims = result.claims;
        renderGifts();
      } else {
        btn.disabled = false;
        btn.textContent = "Marcar";
        const errorEl = giftGrid.querySelector(`[data-error-for="${id}"]`);
        if (errorEl) errorEl.textContent = result.error || "Não foi possível marcar. Tente de novo.";
        if (result.claims) claims = result.claims;
        if (result.error && result.error.includes("já foi marcado")) {
          renderGifts();
        }
      }
    });
  });

  giftGrid.querySelectorAll('[data-action="unclaim"]').forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");
      const ok = confirm("Desmarcar esse presente? Ele voltará a ficar disponível para qualquer pessoa marcar.");
      if (!ok) return;
      btn.disabled = true;
      btn.textContent = "Desmarcando...";
      const result = await unclaimGift(id);
      if (result.ok) {
        claims = result.claims;
        renderGifts();
      } else {
        btn.disabled = false;
        btn.textContent = "não fui eu / desmarcar";
        alert(result.error || "Não foi possível desmarcar. Tente de novo.");
      }
    });
  });
}

async function loadClaims() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    claims = data.claims || {};
  } catch (err) {
    console.error("Erro ao carregar presentes marcados:", err);
    claims = {};
  }
}

async function claimGift(id, nome) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, nome })
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data.error, claims: data.claims };
    }
    return { ok: true, claims: data.claims };
  } catch (err) {
    return { ok: false, error: "Erro de conexão. Confira sua internet e tente de novo." };
  }
}

async function unclaimGift(id) {
  try {
    const res = await fetch(API_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id })
    });
    const data = await res.json();
    if (!res.ok) {
      return { ok: false, error: data.error };
    }
    return { ok: true, claims: data.claims };
  } catch (err) {
    return { ok: false, error: "Erro de conexão. Confira sua internet e tente de novo." };
  }
}

(async function init() {
  renderFilters();
  statusBar.textContent = "Carregando presentes...";
  await loadClaims();
  renderGifts();
})();
