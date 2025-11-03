"use client";
import React, { useState, useEffect } from "react";

export default function SimpleCaptcha({ onVerify, error }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Generate random numbers between 1 and 10
  const generateCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setAnswer("");
    setIsVerified(false);
    if (onVerify) {
      onVerify(false);
    }
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    setAnswer(value);

    // Check if answer is correct
    const correctAnswer = num1 + num2;
    const isValid = parseInt(value) === correctAnswer;
    
    setIsVerified(isValid);
    if (onVerify) {
      onVerify(isValid);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.captchaBox}>
        <div style={styles.question}>
          <span style={styles.number}>{num1}</span>
          <span style={styles.operator}>+</span>
          <span style={styles.number}>{num2}</span>
          <span style={styles.equals}>=</span>
        </div>
        <input
          type="number"
          value={answer}
          onChange={handleAnswerChange}
          placeholder="?"
          style={styles.input}
          min="0"
        />
        <button
          type="button"
          onClick={generateCaptcha}
          style={styles.refreshButton}
          aria-label="Refresh captcha"
        >
          🔄
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      {isVerified && answer && (
        <p style={styles.success}>✓ Verified</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  captchaBox: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 12,
    border: "1px solid #d1d5db",
    borderRadius: 6,
    backgroundColor: "#f9fafb",
  },
  question: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 18,
    fontWeight: "bold",
    color: "#374151",
  },
  number: {
    minWidth: 24,
    textAlign: "center",
  },
  operator: {
    color: "#6b7280",
  },
  equals: {
    color: "#6b7280",
  },
  input: {
    padding: 6,
    width: 60,
    borderRadius: 4,
    border: "1px solid #d1d5db",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  refreshButton: {
    padding: "4px 8px",
    background: "none",
    border: "1px solid #d1d5db",
    borderRadius: 4,
    cursor: "pointer",
    fontSize: 16,
    backgroundColor: "#ffffff",
    transition: "background-color 0.2s",
  },
  error: {
    color: "#ef4444",
    fontSize: 12,
    marginTop: -4,
  },
  success: {
    color: "#10b981",
    fontSize: 12,
    marginTop: -4,
  },
};

