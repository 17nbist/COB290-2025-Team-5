"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Card({children, style, hoverStyle, onClick, className = " "}) {
  const defaultStyle = {
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid",
    
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transform: "translateY(0px)",
    transition: "transform 0.2s, box-shadow 0.2s"
  };

  const combinedStyle = {...defaultStyle, ...style};

  const defaultHoverStyle = {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
  };

  const combinedHoverStyle = {...defaultHoverStyle, ...hoverStyle};

  const delay = Math.random() * 0.5;
  const scaleStart = 0.6 + Math.random() * 0.5;

  return (
    <motion.div
      className={[className, "bg-[#ffff] dark:bg-[#242424] "].join(" ")}
      style={combinedStyle}
      onMouseEnter={(e) => Object.assign(e.currentTarget.style, combinedHoverStyle)}
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, combinedStyle)}
      onClick={onClick}
      initial={{ opacity: 0, scale: scaleStart }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay,
        type: "spring",
        stiffness: 120,
        damping: 10,
      }}
    >
      {children}
    </motion.div>
  );
}