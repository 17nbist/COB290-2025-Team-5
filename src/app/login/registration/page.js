"use client";

import { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: 24 }}>
      <h1>Registration Page</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
    </div>
  );
}
