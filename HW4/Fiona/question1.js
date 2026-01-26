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

// container from the DOM and insert the table
const root = document.querySelector("#table-root");

//create table title
const table = document.createElement("table");
const thead = document.createElement("thead");
const rowTitle = document.createElement("tr");

//add header of column and row
tableInfo.tableHeader.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    rowTitle.append(th);
});
thead.append(rowTitle);
table.append(thead);

//create table body
const tbody = document.createElement("tbody");
tableInfo.tableContent.forEach((rowData) => {
    const tr = document.createElement("tr");
    //use tableHeader to ensure data align to col header
    tableInfo.tableHeader.forEach((key) => {
        const td = document.createElement("td");
        td.textContent = rowData[key];
        tr.append(td);
    });

    tbody.append(tr);
})

table.append(tbody);
root.append(table);
