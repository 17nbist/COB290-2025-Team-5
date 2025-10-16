import { FaRegCommentDots, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ForumPost({ post, onClick }) {
  return (
    <div
      className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 cursor-pointer transition-all duration-200 hover:border-[#475569] hover:shadow-xl hover:-translate-y-1"
      onClick={onClick}
    >
      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-3">
        {post.title}
      </h2>

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
    </div>
  );
}