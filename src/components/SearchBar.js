import { FcSearch } from "react-icons/fc";

export default function SearchBar({ onSearch, onAdd }) {
  return (
    <div style={{ 
      display: "flex", 
      gap: "12px", 
      alignItems: "center",
      marginBottom: "20px" 
    }}>
      {/* Search Input */}
      <div style={{ 
        flex: 1, 
        position: "relative",
        display: "flex",
        alignItems: "center"
      }}>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => onSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 40px 12px 16px",
            borderRadius: "8px",
            border: "1px solid #e5e7eb",
            fontSize: "14px",
            outline: "none"
          }}
          onFocus={(e) => e.target.style.borderColor = "#000000"}
          onBlur={(e) => e.target.style.borderColor = "#e5e7eb"}
        />
        <span style={{ 
          position: "absolute", 
          right: "16px", 
          color: "#9ca3af",
          fontSize: "16px"
        }}>
          <FcSearch size={20}/>
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={onAdd}
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "8px",
          backgroundColor: "#000000",
          color: "#ffffff",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1f2937";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#000000";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        +
      </button>
    </div>
  );
}