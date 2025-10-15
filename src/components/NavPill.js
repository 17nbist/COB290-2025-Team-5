"use client"
import { useState } from "react";
export default function NavPill({style, textStyle, title, active, setActiveTab,}) {
  const [hover, setHover] = useState(false);

  const defaultStyle = {
    display : "flex",
    alignItems : "center",
    justifyContent: "center",
    padding: "8px",
    borderRadius: "12px",
    border: "1px solid rgba(221, 221, 221, 0.3)",
    backgroundColor: active ? "rgba(0, 0, 0, 0.8)" : "#ffffff",
    height: "32px",
    transition: "background-color 0.15s ease-out, transform 0.15s ease-out, box-shadow 0.15s ease-out",
    cursor: "pointer",
    transform: hover ? "scale(1.05)" : "scale(1)",
    boxShadow: hover ? "0 4px 12px rgba(0,0,0,0.1)" : "none"
  };

  const combinedStyle = {...defaultStyle, ...style};

  const defaultTextStyle = {
    color: active ? "#ffffff" : "rgba(0, 0, 0, 0.8)", 
    fontSize: "16px", 
    userSelect: "none",
    transition: "color 0.15s ease-out"
  };

  const combinedTextStyle = {...defaultTextStyle, ...textStyle};

  return (
    <div style={combinedStyle} onClick={() => setActiveTab(title)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h1 style={combinedTextStyle}>{title}</h1>
    </div>
  );
}