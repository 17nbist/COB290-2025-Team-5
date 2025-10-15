import AuthCard from "@/components/AuthCard";
import LoginContainer from "@/components/LoginContainer";

export default function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-slate-400 to-slate-200">
      <AuthCard>
        <LoginContainer />
      </AuthCard>
    </div>
  );
}
