import AuthCard from "@/components/AuthCard";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <AuthCard>
        <LoginForm />
        <LoginForm />
      </AuthCard>
    </div>
  );
}
