"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import LoginForm from "./LoginForm";

export default function LoginContainer() {
    useEffect(() => {
        document.title = 'Login | Make-It-All';
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();

    const handleSignIn = (e) => {
        e.preventDefault();
        const result = login(email, password);

        if (!result.success) {
            setError(result.error);
        }
        // If successful, the login function handles the redirect
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
