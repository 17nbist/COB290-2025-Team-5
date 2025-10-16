import AuthCard from "./AuthCard";
import LoginContainer from "./LoginContainer";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-slate-400 to-slate-200">
        <AuthCard>
            <LoginContainer />
        </AuthCard>
        </div>
    );
}