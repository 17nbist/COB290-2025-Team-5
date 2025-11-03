"use client";
import React from "react";
import SimpleCaptcha from "@/components/SimpleCaptcha";

export default function ForgotForm() {
  const [email, setEmail] = React.useState("");
  const [isCaptchaVerified, setIsCaptchaVerified] = React.useState(false);
  const [captchaError, setCaptchaError] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (!isCaptchaVerified) {
      setCaptchaError("Please verify you are human by solving the captcha.");
      return;
    }
    
    setCaptchaError("");
    console.log("Forgot password for:", email);
    // Eventually I need to add logic to deal with the fogot password request
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-center text-gray-900 mb-2">
          Forgot password?
        </h1>
        <p className="text-center text-gray-600">
          Remember your password?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>

    
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Email address
        </label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="Name@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-black placeholder-gray-400"
        />
      </div>

      <div>
        <SimpleCaptcha 
          onVerify={(verified) => setIsCaptchaVerified(verified)} 
          error={captchaError}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-200"
      >
        Reset password
      </button>
    </form>
  );
}
