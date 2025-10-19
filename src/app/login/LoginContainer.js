"use client";

import { useState } from "react";
import { useEffect } from 'react';
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

export default function LoginContainer() {
    useEffect(() => {
      document.title = 'Login | Make-It-All';
    }, []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSignIn = (e) => {
        e.preventDefault();

        // Hardcoded validation
        if (email === "admin@gmail.com" && password === "password123") {
            router.push("/dashboard");
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            onSubmit={handleSignIn}
        />
    );
}
