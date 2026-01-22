import React from "react";

const StudentTable = () => {
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

  const styles = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "Arial, sans-serif",
      marginTop: "20px",
    },
    th: {
      backgroundColor: "#f2f2f2",
      border: "1px solid #ddd",
      padding: "12px",
      textAlign: "left",
      fontWeight: "bold",
    },
    td: {
      border: "1px solid #ddd",
      padding: "12px",
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Information</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            {tableInfo.tableHeader.map((header) => (
              <th key={header} style={styles.th}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableInfo.tableContent.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableInfo.tableHeader.map((header) => (
                <td key={`${rowIndex}-${header}`} style={styles.td}>
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;