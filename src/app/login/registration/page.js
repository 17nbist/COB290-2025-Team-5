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
        className="text-3xl font-bold mb-6 text-blue-500 drop-shadow-lg"
      >
        Registration
      </motion.h1>

      <Link href="/" className="mt-4 text-white hover:underline drop-shadow-md">
        Back to Home
      </Link>
      <UrlForm/>
    </div>
  );
}
