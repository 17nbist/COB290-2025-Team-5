"use client";
import { useAuth } from "@/lib/AuthContext";
import { FaRegCommentDots, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "@/components/Card";
import ReactMarkdown from "react-markdown";

export default function ForumPost({ post, onClick, onUpvote, onDownvote }) {
  const handleUpvoteClick = (e) => {
    e.stopPropagation();
    onUpvote(post.id);
  };

  const handleDownvoteClick = (e) => {
    e.stopPropagation();
    onDownvote(post.id);
  };

  return (
    <Card onClick={() => onClick(post.id)}>
      <div className="flex space-x-3">
        <h2 className="dark:text-white text-xl font-semibold mb-3">{post.title}</h2>
        <span
        style={{ borderRadius: "10px" }}
          className={
            post.flair === "technical"
              ? "items-center px-2 py-1 h-[32px] bg-[#ffca1d] text-black rounded-md font-medium"
              : "items-center px-2 py-1 h-[32px] bg-black dark:bg-white text-white dark:text-black rounded-md font-medium"
          }
        >
          {post.flair}
        </span>
      </div>

      <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 markdown-content">
        <ReactMarkdown>{post.preview}</ReactMarkdown>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
          <span>posted {post.timeAgo} by {post.author}</span>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 dark:bg-[#334155] text-gray-700 dark:text-gray-400 rounded-md"
              style={{ borderRadius: "5px" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-gray-400">
          <button
            onClick={handleUpvoteClick}
            className={`flex items-center gap-1.5 transition-colors ${post.userVote === "up"
              ? "text-green-500"
              : "hover:text-green-400"
              }`}
          >
            <FaArrowUp size={14} />
            <span className="text-sm font-medium">{post.upvotes}</span>
          </button>

          <button
            onClick={handleDownvoteClick}
            className={`flex items-center gap-1.5 transition-colors ${post.userVote === "down"
              ? "text-red-500"
              : "hover:text-red-400"
              }`}
          >
            <FaArrowDown size={14} />
            <span className="text-sm font-medium">{post.downvotes}</span>
          </button>

          <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
            <FaRegCommentDots size={14} />
            <span className="text-sm font-medium">{post.comments.length}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
