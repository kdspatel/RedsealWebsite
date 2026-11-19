(() => {
  "use strict";
  const NAV_ID = "navigator";

  function visibleButtons(nav) {
    return Array.from(nav.querySelectorAll("button, .nav-btn")).filter(el => {
      const text = (el.textContent || "").trim();
      return /^\d+$/.test(text);
    });
  }

  function initialise(nav) {
    if (!nav || nav.dataset.compactReady === "true") return;
    const buttons = visibleButtons(nav);
    if (!buttons.length) return;

    nav.dataset.compactReady = "true";
    nav.classList.add("rs-compact-source");
    const card = nav.closest(".card") || nav.parentElement;
    if (!card) return;

    const oldHelp = card.querySelector("p.muted.small");
    if (oldHelp) oldHelp.hidden = true;

    const total = buttons.length;
    const wrap = document.createElement("div");
    wrap.className = "rs-question-jump";
    wrap.innerHTML = `
      <div class="rs-jump-status"><div><span>Current question</span><br><strong><b data-current>1</b> / ${total}</strong></div><span data-answer-state>Not answered</span></div>
      <div class="rs-jump-arrows"><button type="button" data-prev aria-label="Previous question">← Previous</button><button type="button" data-next aria-label="Next question">Next →</button></div>
      <div class="rs-jump-label">Go directly to a question</div>
      <form class="rs-jump-form"><input type="number" min="1" max="${total}" inputmode="numeric" placeholder="1–${total}" aria-label="Question number"><button type="submit">Go</button></form>
      <p class="rs-jump-error" role="alert" aria-live="polite"></p>
      <div class="rs-jump-label">Quick jump</div>
      <div class="rs-quick-jumps" aria-label="Quick question jumps"></div>
      <p class="rs-jump-help">Type any question number and press Enter. Your answered questions remain saved while you move around.</p>`;
    nav.insertAdjacentElement("afterend", wrap);

    const input = wrap.querySelector("input");
    const error = wrap.querySelector(".rs-jump-error");
    const quick = wrap.querySelector(".rs-quick-jumps");
    const currentText = wrap.querySelector("[data-current]");
    const stateText = wrap.querySelector("[data-answer-state]");

    const jumpTo = number => {
      const n = Number(number);
      if (!Number.isInteger(n) || n < 1 || n > total) {
        error.textContent = `Enter a number from 1 to ${total}.`;
        input.focus();
        return;
      }
      error.textContent = "";
      const target = buttons.find(btn => Number((btn.textContent || "").trim()) === n) || buttons[n - 1];
      if (target) {
        target.click();
        input.value = "";
        const questionCard = document.getElementById("quizQuestionText")?.closest(".card");
        if (window.innerWidth < 900 && questionCard) questionCard.scrollIntoView({behavior:"smooth", block:"start"});
      }
    };

    wrap.querySelector("form").addEventListener("submit", e => { e.preventDefault(); jumpTo(input.value); });
    wrap.querySelector("[data-prev]").addEventListener("click", () => document.getElementById("prevBtn")?.click());
    wrap.querySelector("[data-next]").addEventListener("click", () => document.getElementById("nextBtn")?.click());

    const points = Array.from(new Set([1, Math.ceil(total*.25), Math.ceil(total*.5), Math.ceil(total*.75), total])).sort((a,b)=>a-b);
    points.forEach(n => {
      const b = document.createElement("button"); b.type="button"; b.textContent=String(n); b.addEventListener("click",()=>jumpTo(n)); quick.appendChild(b);
    });

    function sync() {
      const latest = visibleButtons(nav);
      const current = latest.find(btn => btn.classList.contains("current") || btn.getAttribute("aria-current") === "true") || latest[0];
      const currentNumber = current ? Number((current.textContent || "1").trim()) : 1;
      currentText.textContent = String(currentNumber);
      const answered = current && (current.classList.contains("answered") || current.classList.contains("correct") || current.classList.contains("incorrect"));
      stateText.textContent = answered ? "Answered" : "Not answered";
      quick.querySelectorAll("button").forEach(btn => btn.classList.toggle("is-current", Number(btn.textContent) === currentNumber));
    }
    sync();
    new MutationObserver(sync).observe(nav,{subtree:true,attributes:true,childList:true,attributeFilter:["class","aria-current"]});
    document.getElementById("nextBtn")?.addEventListener("click",()=>setTimeout(sync,0));
    document.getElementById("prevBtn")?.addEventListener("click",()=>setTimeout(sync,0));
  }

  function scan() {
    const nav = document.getElementById(NAV_ID);
    if (nav) initialise(nav);
  }
  document.addEventListener("DOMContentLoaded", scan);
  window.addEventListener("load", scan);
  const observer = new MutationObserver(scan);
  observer.observe(document.documentElement,{childList:true,subtree:true});
})();
