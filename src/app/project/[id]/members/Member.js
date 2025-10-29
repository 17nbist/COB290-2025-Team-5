"use client";

export default function Member({ member, onClick, project }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        backgroundColor: "#fff",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#fff")}
    >
      <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
        {member.name}
      </h3>
      <p style={{ margin: "4px 0 0 0", color: "#555" }}> {member.role + (member.id == project.leaderId? " (Team Leader)" : "")}</p>
    </div>
  );
}