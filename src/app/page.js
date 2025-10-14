import AuthCard from "@/components/AuthCard";
import LoginContainer from "@/components/LoginContainer";

export default function Home() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#f0f2f5",
    },
  };

  return (
    <div style={styles.container}>
      <AuthCard>
        <LoginContainer />
      </AuthCard>
    </div>
  );
}
