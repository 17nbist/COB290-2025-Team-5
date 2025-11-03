
import { FcSearch } from "react-icons/fc";
import { FaFilter } from "react-icons/fa";

export default function SearchBar({ onSearch, onAdvancedSearch }) {
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

      {/* Advanced Search Button */}
      {onAdvancedSearch && (
        <button
          onClick={onAdvancedSearch}
          className="flex items-center gap-2 px-4 py-2 h-[47px] rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#242424] hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          title="Advanced Search"
        >
          <FaFilter size={16} className="text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filters</span>
        </button>
      )}
    </div>
  );
}