import {FaFlag} from "react-icons/fa";
import Card from "@/components/Card"

export default function RequestPost({ request, onClick, onTogglePriority }) {
  return (
    <Card>
      {/* Title */}
      <h2 className="text-xl font-semibold mb-3">
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
    </Card>
  );
}