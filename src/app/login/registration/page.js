"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import UrlForm from "./UrlForm";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");

    useEffect(() => {
    document.title = "Registration | Make-It-All";
  }, []);


  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/BlueBackground.png')",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold mb-6 text-blue drop-shadow-lg"
      >
        Welcome to Make-It-All!
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mb-4 text-center text-gray-700 drop-shadow-md"
      >
        Let's finish setting up your account.
      </motion.div>
      <UrlForm/>
    </div>
  );
}
