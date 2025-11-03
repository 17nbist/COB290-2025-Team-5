"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineEmail,
  MdLockOutline,
  MdPersonOutline,
  MdVisibility,
  MdVisibilityOff,
  MdKey,
} from "react-icons/md";
import Link from "next/link";

export default function UrlForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [accessCode, setAccessCode] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [showAccessCode, setShowAccessCode] = React.useState(false);

  const REQUIRED_ACCESS_CODE = "MAKE2025";

  const validateForm = () => {
    if (!/^[^\s@]+@make-it-all\.co\.uk$/i.test(email)) {
      setError("Please enter a valid Make-It-All email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return false;
    }
    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number.");
      return false;
    }
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    if (accessCode.trim() !== REQUIRED_ACCESS_CODE) {
      setError("Invalid access code. Please contact your administrator.");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSuccess(true);
    setError("");
    console.log({ name, email, password });

    // Clear form fields after success
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAccessCode(""); // ✅ Clear access code too

    // Hide success message after 3 seconds
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4 mt-8"
      >
        {/* Name */}
        <label className="flex flex-col text-sm text-gray-700">
          Name
          <div className="relative flex items-center">
            <MdPersonOutline className="absolute left-2 text-gray-400 text-lg" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </label>

        {/* Email */}
        <label className="flex flex-col text-sm text-gray-700">
          Email
          <div className="relative flex items-center">
            <MdOutlineEmail className="absolute left-2 text-gray-400 text-lg" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full border ${
                error.toLowerCase().includes("email")
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              } rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2`}
            />
          </div>
        </label>

        {/* Password */}
        <label className="flex flex-col text-sm text-gray-700">
          Password
          <div className="relative flex items-center">
            <MdLockOutline className="absolute left-2 text-gray-400 text-lg" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={`w-full border ${
                error.toLowerCase().includes("password")
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              } rounded-md pl-8 pr-10 py-2 focus:outline-none focus:ring-2`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <MdVisibilityOff className="w-5 h-5" />
              ) : (
                <MdVisibility className="w-5 h-5" />
              )}
            </button>
          </div>
        </label>

        {/* Confirm Password */}
        <label className="flex flex-col text-sm text-gray-700">
          Confirm Password
          <div className="relative flex items-center">
            <MdLockOutline className="absolute left-2 text-gray-400 text-lg" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className={`w-full border ${
                error.toLowerCase().includes("match")
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              } rounded-md pl-8 pr-10 py-2 focus:outline-none focus:ring-2`}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((s) => !s)}
              className="absolute right-2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? (
                <MdVisibilityOff className="w-5 h-5" />
              ) : (
                <MdVisibility className="w-5 h-5" />
              )}
            </button>
          </div>
        </label>

        {/* Access Code */}
        <label className="flex flex-col text-sm text-gray-700">
          Access Code
          <div className="relative flex items-center">
            <MdKey className="absolute left-2 text-gray-400 text-lg" />
            <input
              type={showAccessCode ? "text" : "password"} 
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              required
              className={`w-full border ${
                error.toLowerCase().includes("access code")
                  ? "border-red-400 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-500"
              } rounded-md pl-8 pr-10 py-2 focus:outline-none focus:ring-2`}
            />
            <button
              type="button"
              onClick={() => setShowAccessCode((s) => !s)}
              className="absolute right-2 text-gray-400 hover:text-gray-600"
            >
              {showAccessCode ? (
                <MdVisibilityOff className="w-5 h-5" />
              ) : (
                <MdVisibility className="w-5 h-5" />
              )}
            </button>
          </div>
        </label>

        {/* Error Message (consistent animation + style) */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="text-red-500 text-sm text-center"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Already have an account */}
        <div className="flex justify-end items-center text-xs">
          <span className="text-gray-600">Already have an account?</span>
          <Link
            href="/login"
            className="ml-1 text-blue-600 hover:underline font-medium"
          >
            Sign in
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 mt-2 transition-all"
        >
          Create Account
        </button>
      </form>

      {/* Animated success message */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-6 bg-green-100 text-blue-700 px-4 py-2 rounded-lg shadow-md text-sm font-medium"
          >
            Account created. Welcome aboard!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}