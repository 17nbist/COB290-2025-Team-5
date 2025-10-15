export default function ForumPost({ post, onClick }) {
  const defaultStyle = {
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  return (
    <div 
      style={defaultStyle} 
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Title */}
      <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
        {post.title}
      </h2>

      {/* Preview Text */}
      <p style={{ 
        color: "#6b7280", 
        fontSize: "14px", 
        marginBottom: "12px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }}>
        {post.preview}
      </p>

      {/* Metadata Row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "12px", color: "#9ca3af" }}>
          posted {post.timeAgo}
        </span>
        {post.tags.map((tag, index) => (
          <span key={index} style={{ fontSize: "12px", color: "#9ca3af" }}>
            | {tag}
          </span>
        ))}
      </div>

      {/* Engagement Metrics */}
      <div style={{ display: "flex", gap: "16px", marginTop: "12px", alignItems: "center" }}>
        <span style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "4px" }}>
          <span>↑</span>
          <span>{post.upvotes}</span>
        </span>
        <span style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "4px" }}>
          <span>↓</span>
          <span>{post.downvotes}</span>
        </span>
        <span style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "4px" }}>
          <span>💬</span>
          <span>{post.comments}</span>
        </span>
      </div>
    </div>
  );
}