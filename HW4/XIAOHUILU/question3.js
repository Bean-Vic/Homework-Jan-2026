const tabLinks = document.querySelector("#tablinks");
const buttons = document.querySelectorAll(".tablinks button");
const panels = document.querySelectorAll(".tabcontent");

function showTab(name) {
  buttons.forEach((b) => b.classList.toggle("active", b.dataset.tab === name));
  panels.forEach((p) => p.classList.toggle("active", p.dataset.tab === name));
}

// default
showTab("London");

tabLinks.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  showTab(btn.dataset.tab);
});