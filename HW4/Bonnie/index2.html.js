
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

function renderTable(tableInfo, rootId) {
  const root = document.getElementById(rootId);
  if (!root) return;

  const table = document.createElement("table");

  // thead
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  tableInfo.tableHeader.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // tbody
  const tbody = document.createElement("tbody");

  tableInfo.tableContent.forEach((rowObj) => {
    const tr = document.createElement("tr");

    // Make sure column order matches tableHeader
    tableInfo.tableHeader.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = rowObj[key] ?? ""; // safe fallback
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  // clear then append
  root.innerHTML = "";
  root.appendChild(table);
}

renderTable(tableInfo, "table-root");

/***********************
 * 2.2 Tabs (Event Delegation)
 ***********************/
const tabButtons = document.getElementById("tabButtons");
const tabContents = Array.from(document.querySelectorAll(".tab-content"));

function setActiveTab(tabName) {
  // buttons active style
  const buttons = Array.from(tabButtons.querySelectorAll("button"));
  buttons.forEach((btn) => {
    btn.classList.toggle("active", btn.textContent.trim() === tabName);
  });

  // show only matching content
  tabContents.forEach((section) => {
    const name = section.getAttribute("data-tab");
    section.classList.toggle("hidden", name !== tabName);
  });
}

// a) default London selected
setActiveTab("London");

// b) event delegation on parent div
tabButtons.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const tabName = btn.textContent.trim();
  setActiveTab(tabName);
});
