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

const table = document.querySelector("table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");

table.style.borderCollapse = "collapse";
table.style.width = "50%";
tableInfo.tableHeader.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  th.style.border = "1px solid black";
  th.style.textAlign = "center"
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);

const tbody = document.createElement("tbody");

tableInfo.tableContent.forEach((rowObj) => {
  const tr = document.createElement("tr");
  tableInfo.tableHeader.forEach((headerkey) => {
    const td = document.createElement("td");
    td.textContent = rowObj[headerkey];
    td.style.border = "1px solid black";
    td.style.textAlign = "center";
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
table.appendChild(thead);
table.appendChild(tbody);


