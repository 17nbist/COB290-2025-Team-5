"use client";
import AuthCard from "./AuthCard";
import LoginContainer from "./LoginContainer";

export default function Login() {
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500">
            <div className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{backgroundImage: "url('/Abstract-BG.png')"}}
            />
            <div className="absolute inset-0 bg-black opacity-20"/>
                <div className= "relative z-10">
        <AuthCard>
            <LoginContainer />
        </AuthCard>
        </div>
    </div>
    );
}