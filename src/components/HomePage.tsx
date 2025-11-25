import React from "react";
import { useNavigate } from "react-router-dom";
import QueuevariableCard from "./MUI/QueuevariableCard";
import MailCard from "./MUI/MailCard";


export default function HomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/queueVariables");
  }

  return (
    <>
    <QueuevariableCard onClick={handleClick} />
    <MailCard onClick={() => navigate("/mailTemplate")} />
    </>
  )
}
