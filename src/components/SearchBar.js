import { FcSearch } from "react-icons/fc";

export default function SearchBar({onSearch}) {
  return (
    <div style={{ 
      display: "flex", 
      gap: "12px", 
      alignItems: "center",
      marginBottom: "20px",
      width: "100%",
      marginRight: "30px"
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
          className="bg-[#fff] dark:bg-[#242424]"
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

    </div>
  );
}