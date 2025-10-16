import { FaRegCommentDots, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function ForumPost({ post, onClick }) {
  return (
    <div
      className="bg-gray-800 border border-gray-700 rounded-lg p-5 cursor-pointer transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-0.5"
      onClick={onClick}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-100 mb-2">
        {post.title}
      </h2>

      {/* Preview Text */}
      <p className="text-gray-400 text-sm mb-3 overflow-hidden text-ellipsis whitespace-nowrap">
        {post.preview}
      </p>

      {/* Metadata Row */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-gray-500">
          posted {post.timeAgo}
        </span>
        {post.tags.map((tag, index) => (
          <span key={index} className="text-xs text-gray-500">
            | {tag}
          </span>
        ))}
      </div>

      {/* Engagement Metrics */}
      <div className="flex items-center gap-4 mt-3 text-gray-400">
        <span className="text-sm flex items-center gap-1">
          <FaArrowUp />
          <span>{post.upvotes}</span>
        </span>
        <span className="text-sm flex items-center gap-1">
          <FaArrowDown />
          <span>{post.downvotes}</span>
        </span>
        <span className="text-sm flex items-center gap-1">
          <FaRegCommentDots />
          <span>{post.comments}</span>
        </span>
      </div>
    </div>
  );
}