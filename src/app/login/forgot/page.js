"use client";
import React from "react";
import ForgotForm from "./ForgotForm";

export default function ForgotPassword() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/Abstract-BG.png')" }}
      />

      <div className="absolute inset-0 bg-black opacity-30" />

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-[1.02]">
          <ForgotForm />
        </div>
      </div>
    </div>
  );
}
