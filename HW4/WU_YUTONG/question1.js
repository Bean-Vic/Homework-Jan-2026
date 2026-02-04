const tableInfo = {
  header: ["Student Name", "Age", "Phone", "Address"],
  content: [
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

const table = document.createElement("table");

//表头循环
const table_header = document.createElement("tr");
tableInfo.header.forEach((type) => {
  const th = document.createElement("th");
  th.textContent = type;
  table_header.appendChild(th);
});

table.appendChild(table_header);

//学生循环
tableInfo.content.forEach((student) => {
  const tr = document.createElement("tr");

  tableInfo.header.forEach((key) => {
    const td = document.createElement("td");
    td.textContent = student[key];
    tr.appendChild(td);
  });

  table.appendChild(tr);
});

document.getElementById("dynamic-table").appendChild(table);