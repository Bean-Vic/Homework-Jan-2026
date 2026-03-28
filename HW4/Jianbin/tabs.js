const tabContainer = document.getElementById("tabButtons");
const buttons = document.querySelectorAll(".tabs button");
const contents = document.querySelectorAll(".content");

tabContainer.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;

  const city = event.target.dataset.city;

  // Update buttons
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Update content
  contents.forEach(content => {
    content.classList.remove("active");
    if (content.dataset.city === city) {
      content.classList.add("active");
    }
  });
});
