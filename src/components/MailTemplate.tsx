import React, { useState } from "react";
import "./MailTemplate.css";

export default function MailTemplate() {
  const [mailTemplate, setMailTemplate] = useState("");

  const mail = `String mailTo = getValue("");
String mailBody = properties.getProperty("mailBody");
String mailSubject = "";
List<String> inputParamList = new ArrayList<>();
inputParamList.add("Text:" + mailTo);

inputParamList.add("Text:" + mailSubject);

inputParamList.add("Text:" + mailBody);

if (documentIndex.equalsIgnoreCase("")) {
    inputParamList.add("Text:");
} else {
    inputParamList.add("Text:" + documentIndex);
}

List<List<String>> tableData = ifr.getDataFromStoredProcedure("NGP_TRIGGER_MAIL", inputParamList);
`;

  function handleClick() {
    setMailTemplate(mail);
  }

  return (
    <div className="main-mail-template">
      <div className="left-mail-template">
        <button onClick={handleClick} className="btn-generate">
          Generate Template
        </button>
      </div>

      <div className="right-mail-template">
        <pre>{mailTemplate}</pre>
      </div>
    </div>
  );
}
