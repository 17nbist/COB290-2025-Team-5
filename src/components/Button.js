"use client";
import { useState } from "react";

export default function Button({
  text,
  icon,
  onClick,
  outerStyle,
  textStyle,
  type,
}) {
  const [hover, setHover] = useState(false);

  const defaultOuterStyle = {
    display: "flex",
    borderRadius: "8px",
    padding: "6px 13px 6px 13px",
    height: "40px",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    border: "1px solid #e0e0e0",
    backgroundColor: hover ? "#000" : "#fff",
    boxShadow: hover ? "0 4px 16px rgba(0,0,0,0.15)" : "0 0px 0px rgba(0,0,0,0)",
    transform: hover ? "translateY(-1.2px)" : "translateY(0px)",
    transition: "all 0.1s ease-in",
  };

  const combinedOuterStyle = { ...defaultOuterStyle, ...outerStyle };

  const defaultTextStyle = {
    color: hover ? "#fff" : "#000",
    userSelect: "none",
    transition: "all 0.1s ease-in",
    textAlign: "center",
    fontSize: "1rem",
  };

  const combinedTextStyle = { ...defaultTextStyle, ...textStyle };

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      style={combinedOuterStyle}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >

      <p style={combinedTextStyle}>{text}</p>
    </button>
  );
}