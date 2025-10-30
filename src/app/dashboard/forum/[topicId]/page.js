"use client";
import { useEffect, useState } from "react";
import { FaRegCommentDots, FaArrowUp, FaArrowDown } from "react-icons/fa";
import Card from "@/components/Card";
import { forumPosts } from "@/lib/base-data/forums";
import { useAuth } from "@/lib/AuthContext";
import Button from "@/components/Button";

export default function TopicPage({ params }) {
    const { topicId } = params;
    const post = forumPosts.find((p) => String(p.id) === String(topicId));

    const { user } = useAuth();

    const [votes, setVotes] = useState({
        upvotes: post?.upvotes || 0,
        downvotes: post?.downvotes || 0,
    });
    const [comments, setComments] = useState(post?.comments || []);
    const [newComment, setNewComment] = useState("");

    const [userVoteStatus, setUserVoteStatus] = useState(null);

    useEffect(() => {
        if (post) {
            setVotes({ upvotes: post.upvotes || 0, downvotes: post.downvotes || 0 });
            setComments(post.comments || []);
        }
    }, [post]);

    if (!post) return <div className="p-6">Post not found</div>;

    const handleUpvoteClick = (e) => {
        e.stopPropagation();

        let newVotes = { ...votes };

        switch (userVoteStatus) {
            case null:
                setUserVoteStatus("up");
                newVotes.upvotes += 1;
                break;
            case "up":
                setUserVoteStatus(null);
                newVotes.upvotes -= 1;
                break;
            case "down":
                setUserVoteStatus("up");
                newVotes.upvotes += 1;
                newVotes.downvotes -= 1;
                break;
        }
        setVotes(newVotes);
    };

    const handleDownvoteClick = (e) => {
        e.stopPropagation();

        let newVotes = { ...votes };

        switch (userVoteStatus) {
            case null:
                setUserVoteStatus("down");
                newVotes.downvotes += 1;
                break;
            case "down":
                setUserVoteStatus(null);
                newVotes.downvotes -= 1;
                break;
            case "up":
                setUserVoteStatus("down");
                newVotes.downvotes += 1;
                newVotes.upvotes -= 1;
                break;
        }
        setVotes(newVotes);
    };

    const handleSubmitComment = (e) => {
        e.preventDefault();
        if (!newComment.trim() || !user) return;

        const commentToAdd = {
            id: Date.now(),
            author: user.email,
            text: newComment,
            timeAgo: "just now",
        };

        setComments([commentToAdd, ...comments]);
        setNewComment("");
    };

    return (
        <>
            <div className="p-6">
                <Card className="hover:border-gray-600 transition-colors duration-200">
                    <div className="flex space-x-3">
                        <h2 className="text-2xl font-semibold mb-3">{post.title}</h2>
                        <span
                            className={
                                post.flair === "technical"
                                    ? "items-center px-2 py-1 h-[32px] bg-emerald-300 text-black rounded-md"
                                    : "items-center px-2 py-1 h-[32px] bg-sky-300 text-black rounded-md"
                            }
                        >
                            {post.flair}
                        </span>
                    </div>

                    <p className="text-gray-100 text-base mb-4 whitespace-pre-wrap">
                        {post.content}
                    </p>

                    <div className="flex items-center justify-between">
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

                        <div className="flex items-center gap-4 text-gray-400">
                            <button
                                onClick={handleUpvoteClick}
                                className={`flex items-center gap-1.5 transition-colors ${userVoteStatus === "up"
                                        ? "text-green-500"
                                        : "hover:text-green-400"
                                    }`}
                            >
                                <FaArrowUp size={14} />
                                <span className="text-sm font-medium">{votes.upvotes}</span>
                            </button>

                            <button
                                onClick={handleDownvoteClick}
                                className={`flex items-center gap-1.5 transition-colors ${userVoteStatus === "down"
                                        ? "text-red-500"
                                        : "hover:text-red-400"
                                    }`}
                            >
                                <FaArrowDown size={14} />
                                <span className="text-sm font-medium">{votes.downvotes}</span>
                            </button>

                            <span className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                                <FaRegCommentDots size={14} />
                                <span className="text-sm font-medium">{comments.length}</span>
                            </span>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="px-6 pb-6">
                <Card>
                    <form onSubmit={handleSubmitComment}>
                        <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
                        <textarea
                            className="w-full p-2 bg-gray-700 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            placeholder={`Comment as ${user?.email || "..."}`}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        ></textarea>
                        <div className="flex justify-end mt-3">
                            <Button type="submit" text={"Submit"} />
                        </div>
                    </form>
                </Card>
            </div>

            <div className="px-6 pb-6 space-y-4">
                {comments.map((comment) => (
                    <Card key={comment.id}>
                        <p className="text-gray-100">{comment.text}</p>
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-xs text-gray-400">
                                - {comment.author}
                            </span>
                            <span className="text-xs text-gray-500">{comment.timeAgo}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}
