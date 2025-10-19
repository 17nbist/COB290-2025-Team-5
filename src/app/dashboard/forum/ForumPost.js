import { FaRegCommentDots, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "@/components/Card"

export default function ForumPost({ post, onClick }) {
  return (
    <Card>
      {/* Title */}
      <div className="flex space-x-3">
      <h2 className="text-xl font-semibold text-black mb-3">
        {post.title}
      </h2>

      {/* Flair */}
      <span className={post.flair === "technical" ? "items-center px-2 py-1 h-[32px] bg-[#122eb8] text-black rounded-md" : "items-center px-2 py-1 h-[32px] bg-[#286b23] text-black rounded-md"}
      >
        {post.flair}
      </span>
    </div>

      {/* Preview Text */}
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {post.preview}
      </p>

      {/* Metadata and Engagement Row */}
      <div className="flex items-center justify-between">
        {/* Left: Metadata */}
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>posted {post.timeAgo}</span>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#334155] text-gray-400 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Right: Engagement Metrics */}
        <div className="flex items-center gap-4 text-gray-400">
          <span className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
            <FaArrowUp size={14} />
            <span className="text-sm font-medium">{post.upvotes}</span>
          </span>
          <span className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
            <FaArrowDown size={14} />
            <span className="text-sm font-medium">{post.downvotes}</span>
          </span>
          <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <FaRegCommentDots size={14} />
            <span className="text-sm font-medium">{post.comments}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
