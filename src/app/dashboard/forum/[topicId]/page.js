"use client";
import { useAuth } from "@/lib/AuthContext";
import { FaRegCommentDots, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "@/components/Card";

export default function ForumPost({ post }) {
    const [votes, setVotes] = useState({ upvotes: post.upvotes, downvotes: post.downvotes });

    const handleVote = async (e, voteType) => {
        e.stopPropagation();
        e.preventDefault();

        if (voteType === "upvote") {
            setVotes((prevVotes) => ({ ...prevVotes, upvotes: prevVotes.upvotes + 1 }));
        } else {
            setVotes((prevVotes) => ({ ...prevVotes, downvotes: prevVotes.downvotes + 1 }));
        }

        try {
            const response = await fetch(`/api/forum/posts/${post.id}/vote`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ action: voteType }),
            });

            if (!response.ok) {
                console.error("Failed to register vote");
                setVotes({ upvotes: post.upvotes, downvotes: post.downvotes });
            }
        } catch (error) {
            console.error("Error voting on post:", error);
            setVotes({ upvotes: post.upvotes, downvotes: post.downvotes });
        }
    };

    return (
        <Card outerClassName="hover:border-gray-600 transition-colors duration-200">
            <div className="flex space-x-3">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <span className={post.flair === "technical" ? "items-center px-2 py-1 h-[32px] bg-emerald-300 text-black rounded-md" : "items-center px-2 py-1 h-[32px] bg-sky-300 text-black rounded-md"}>
                    {post.flair}
                </span>
            </div>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.preview}</p>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>posted {post.timeAgo}</span>
                    {post.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-[#334155] text-gray-400 rounded-md">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 text-gray-400">
                    {/* Upvote Button */}
                    <button onClick={(e) => handleVote(e, 'upvote')} className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
                        <FaArrowUp size={14} />
                        <span className="text-sm font-medium">{votes.upvotes}</span>
                    </button>

                    {/* Downvote Button */}
                    <button onClick={(e) => handleVote(e, 'downvote')} className="flex items-center gap-1.5 hover:text-red-400 transition-colors">
                        <FaArrowDown size={14} />
                        <span className="text-sm font-medium">{votes.downvotes}</span>
                    </button>

                    <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                        <FaRegCommentDots size={14} />
                        <span className="text-sm font-medium">{post.comments}</span>
                    </span>
                </div>
            </div>
        </Card>
    );
}