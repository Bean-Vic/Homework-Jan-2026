const tabs = document.getElementById("tabs");
const buttons = tabs.querySelectorAll(".tab");
const panels = tabs.querySelectorAll(".panel");

function displayTab(city) {
  // 取消active
  buttons.forEach((btns) => btns.classList.remove("active"));
  panels.forEach((panel) => panel.classList.remove("active"));

  // 加active
  buttons.forEach((btns) => {
    if (btns.textContent === city) {
      btns.classList.add("active");
    }
  });

  panels.forEach((panel) => {
    const name = panel.querySelector("h2").textContent;
    if (name === city) {
      panel.classList.add("active");
    }
  });
}

// 默认显示London
displayTab("London");

// event delegation
tabs.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tab")) return;
  displayTab(e.target.textContent);
});