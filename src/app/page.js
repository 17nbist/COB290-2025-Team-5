import AuthCard from "@/components/AuthCard";
import LoginContainer from "@/components/LoginContainer";

export default function Home() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <AuthCard>
        <LoginContainer />
      </AuthCard>
    </div>
  );
}
