import {FaFlag} from "react-icons/fa";

export default function RequestPost({ request, onClick, onTogglePriority }) {
  return (
    <div
      className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 cursor-pointer transition-all duration-200 hover:border-[#475569] hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-3">
        {request.title}
      </h2>

      {/* Preview Text */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {request.preview}
      </p>

      {/* Metadata and Engagement Row */}
      <div className="flex items-center justify-between">
        {/* Left: Metadata */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>requested {request.timeAgo}
          </span>
        </div>

        {/* Right: Engagement Metrics */}
        {request.type === "Incoming" && (
        <div className="flex items-center gap-4 text-gray-400">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onTogglePriority(request.id);
            }}
            className={request.highPriority ? "text-red-400" : "hover:text-red-400 transition-colors"} //react is VERY case-sensitive make sure to match the prop name exactly
          >
            <FaFlag size={17} />
          </button>
        </div> )}
      </div>
    </div>
  );
}