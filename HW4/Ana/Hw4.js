// 1. Dynamic Table Creation (coding + DOM manipulation)
// Given the following array and implement a table dynamically using JavaScript to match the following image.
// The table should have 4 columns: Student Name, Age, Phone, Address.
    
 
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
    
    // ![image](https://github.com/user-attachments/assets/297091ff-d7ec-4111-85b3-0481554c1498)
const createTable = (tableData) => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create table header
  const headerRow = document.createElement("tr");
  tableData.tableHeader.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  tableData.tableContent.forEach((student) => {
    const row = document.createElement("tr");
    tableData.tableHeader.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = student[key];
      row.appendChild(td);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append the table to the body or a specific container
  document.body.appendChild(table);
};

createTable(tableInfo);
   

// 2. Given the following UI and HTML code, implement the following features, while matching the styling ***as closely*** as possible.
//     1. By default, the London tab is selected and only its content is displayed.
//     2. When the user clicks on a tab, it is the only one that becomes highlighted, and only the corresponding content will be displayed.
//     3. Ex: The user clicks ‘Paris’, so only the ‘Paris’ content is displayed.
    
//     *(hint1: event delegation is preferred)* 
    
//     *(hint2: [ele.classList.toggle](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)(’specific class you’d like to add’))* 
    
    
//     ![image](https://github.com/user-attachments/assets/288b9510-4195-4bf3-991c-47a36a57f7b0)
    
    <div>
        <div>
          <button>London</button>
          <button>Paris</button>
          <button>Tokyo</button>
        </div>
        <div>
          <h2>London</h2>
          <p>London is the capital city of England</p>
        </div>
        <div>
          <h2>Paris</h2>
          <p>Paris is the capital of France.</p>
        </div>
        <div>
          <h2>Tokyo</h2>
          <p>Tokyo is the capital of Japan.</p>
        </div>
    </div>
    
    const tabs = document.querySelectorAll("button");
    const contents = document.querySelectorAll("div > div:nth-child(n+2)"); // Select content divs

    // Function to hide all contents and remove active class from tabs
    const resetTabs = () => {
      contents.forEach((content) => (content.style.display = "none"));
      tabs.forEach((tab) => tab.classList.remove("active"));
    };

    // Initial setup: show London content
    resetTabs();
    contents[0].style.display = "block";
    tabs[0].classList.add("active");

    // Event listener for tab clicks
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        resetTabs();
        contents[index].style.display = "block";
        tab.classList.add("active");
      });
    });

