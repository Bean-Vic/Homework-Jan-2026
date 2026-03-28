// from DOM
const tabButton = document.querySelector("#tab-buttons");
const button = tabButton.querySelectorAll("button");
const content = document.querySelectorAll(".tab-content > div");

// only show London initially
content.forEach((content, index) => {
    content.style.display = index === 0 ? "block" : "none";
});

tabButton.addEventListener("click", (event) => {
    const clickedButton = event.target;
    const city = clickedButton.textContent;

    //highlight the clicked button
    button.forEach((btn => {
        btn.classList.toggle("active", btn === clickedButton);
    }));

    //display selected content
    content.forEach((content) => {
        const title = content.querySelector("h2").textContent;
        content.style.display = title === city ? "block" : "none";
    });
})
