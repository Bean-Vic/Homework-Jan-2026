const tabBar = document.getElementById('tabBar');;
const tabs = tabBar.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabBar.addEventListener('click', (e)=> {
    const clicked = e.target.closest(".tab");
    //console.log(clicked);
    if (!clicked) return;

    const targetID = clicked.dataset.tab;

    tabs.forEach((tab)=> {
        tab.classList.remove("active");
    });
    clicked.classList.add("active");

    panels.forEach(panel => panel.classList.remove("active"));
    document.getElementById(targetID).classList.add("active");
    //console.log(targetID);
});