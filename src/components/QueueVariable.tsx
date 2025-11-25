import React, { useState } from "react";
import "./QueueVariable.css";

export default function QueueVariable() {
  const [result, setResult] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const tableName = (document.getElementById("tableName") as HTMLInputElement)?.value.trim();
    const tableSize = Number((document.getElementById("tableSize") as HTMLInputElement)?.value.trim());
    const isTable = (document.getElementById("istable") as HTMLInputElement)?.checked;

    if (!tableName || tableSize <= 0) {
      setResult("Please enter a valid table name and number of fields.");
      return;
    }

    // Extract complex type name
    const complexType = tableName.includes("_") ? tableName.split("_")[1] : "Unknown";

    // Build table fields
    const fieldLines = Array.from({ length: tableSize }, (_, i) => `\tfield${i + 1} NVARCHAR(250) NULL`);

    // Build SQL
    let sql = `CREATE TABLE ${tableName}\n(\n\tWI_Name NVARCHAR(250) NULL,`;

    if (fieldLines.length > 0) {
      sql += "\n" + fieldLines.join(",\n") + ",";
    }

    if (isTable) {
      sql += `\n\tinsertionOrderId BIGINT IDENTITY NOT NULL,`;
      sql += `\n\tCONSTRAINT pk_${tableName} PRIMARY KEY (insertionOrderId)`;
    } else {
      sql = sql.replace(/,$/, ""); // remove last comma
    }

    sql += `\n);`;

    // ComplexType Code
    const fieldsArray = Array.from({ length: tableSize }, (_, i) => `field${i + 1}`);

    let complexTypeScript = `
\n\n// --- Complex Type Fields (${complexType}) ---
let values = ${JSON.stringify(fieldsArray, null, 2)};

for (let i = 0; i < values.length; i++) {
    setTimeout(() => {
        let v = values[i];

        document.getElementById('complexTypesForm:cmdNewStrucMember').click();
        document.getElementById('complexTypesForm:inpMemberName').value = v;
        document.getElementById('complexTypesForm:cmdAdd').click();
    }, i * 1000);
}
`;

    setResult(sql + complexTypeScript);
  }

  return (
    <div className="main-queue-div">

      {/* LEFT SIDE */}
      <div className="left-side-queue">
        <h2>Action</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" id="tableName" placeholder="Table Name" className="input-field-queue" />
          <input type="number" id="tableSize" placeholder="How many fields?" className="input-field-queue" />

          <div className="radio-group">
            <label>
              <input type="radio" id="istable" name="tableType" /> Yes
            </label>
            <label>
              <input type="radio" id="istableNo" name="tableType" /> No
            </label>
          </div>

          <button type="submit" className="btn">Create Table</button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-side-queue">
        <h2>Result</h2>
        <pre className="result-box">{result}</pre>
      </div>
    </div>
  );
}
