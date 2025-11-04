"use client";
import { useEffect, useState } from "react";
import { FaRegCommentDots, FaArrowUp, FaArrowDown, FaArrowLeft } from "react-icons/fa";
import Card from "@/components/Card";
import { useAuth } from "@/lib/AuthContext";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import ReactMarkdown from "react-markdown";

export default function TopicPage({ params }) {
    const { topicId } = params;
    const { user, allForumPosts, updateForumPost, loading } = useAuth();
    const router = useRouter();

    const post = allForumPosts?.find((p) => String(p.id) === String(topicId));

    const [newComment, setNewComment] = useState("");

    useEffect(() => {
      document.title = `${post?.title || 'Post'} | Make-It-All`;
    }, [post]);

    if (loading || !allForumPosts) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner size="large" />
        </div>
      );
    }

    if (!post) return <div className="p-6">Post not found</div>;

    const userVote = (post.userVotes || {})[user?.email] || null;

    const handleUpvoteClick = (e) => {
        e.stopPropagation();
        if (!user) return;

        const userVotes = post.userVotes || {};
        const currentUserVote = userVotes[user.email] || null;

        let newUpvotes = post.upvotes;
        let newDownvotes = post.downvotes;
        const newUserVotes = { ...userVotes };

        switch (currentUserVote) {
            case null:
                newUserVotes[user.email] = "up";
                newUpvotes += 1;
                break;
            case "up":
                delete newUserVotes[user.email];
                newUpvotes -= 1;
                break;
            case "down":
                newUserVotes[user.email] = "up";
                newUpvotes += 1;
                newDownvotes -= 1;
                break;
        }

        updateForumPost(post.id, {
            upvotes: newUpvotes,
            downvotes: newDownvotes,
            userVotes: newUserVotes,
        });
    };

    const handleDownvoteClick = (e) => {
        e.stopPropagation();
        if (!user) return;

        const userVotes = post.userVotes || {};
        const currentUserVote = userVotes[user.email] || null;

        let newUpvotes = post.upvotes;
        let newDownvotes = post.downvotes;
        const newUserVotes = { ...userVotes };

        switch (currentUserVote) {
            case null:
                newUserVotes[user.email] = "down";
                newDownvotes += 1;
                break;
            case "down":
                delete newUserVotes[user.email];
                newDownvotes -= 1;
                break;
            case "up":
                newUserVotes[user.email] = "down";
                newDownvotes += 1;
                newUpvotes -= 1;
                break;
        }

        updateForumPost(post.id, {
            upvotes: newUpvotes,
            downvotes: newDownvotes,
            userVotes: newUserVotes,
        });
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

        const updatedComments = [commentToAdd, ...(post.comments || [])];
        updateForumPost(post.id, { comments: updatedComments });
        setNewComment("");
    };

    return (
        <>
        <div className="bg-[#d2d2d2] dark:bg-[#303030] min-h-screen">
            <div className="p-6">
                <button
                    onClick={() => router.push('/dashboard#forum')}
                    className="mb-4 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                    <FaArrowLeft size={14} />
                    <span>Back to Forum</span>
                </button>
                <Card className="hover:border-gray-600 dark:hover:border-gray-500 transition-colors duration-200">
                    <div className="flex space-x-3">
                        <h2 className="text-black dark:text-white text-2xl font-semibold mb-3">{post.title}</h2>
                        <span
                            className={
                                post.flair === "technical"
                                    ? "items-center px-2 py-1 h-[32px] bg-[#ffca1d] text-black rounded-md font-medium"
                                    : "items-center px-2 py-1 h-[32px] bg-black dark:bg-white text-white dark:text-black rounded-md font-medium"
                            }
                        >
                            {post.flair}
                        </span>
                    </div>

                    <div className="text-gray-800 dark:text-gray-100 text-base mb-4 markdown-content">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                            <span>posted {post.timeAgo} by {post.author}</span>
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-200 dark:bg-[#334155] text-gray-700 dark:text-gray-300 rounded-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <button
                                onClick={handleUpvoteClick}
                                className={`flex items-center gap-1.5 transition-colors ${userVote === "up"
                                        ? "text-green-500 dark:text-green-400"
                                        : "hover:text-green-500 dark:hover:text-green-400"
                                    }`}
                            >
                                <FaArrowUp size={14} />
                                <span className="text-sm font-medium">{post.upvotes}</span>
                            </button>

                            <button
                                onClick={handleDownvoteClick}
                                className={`flex items-center gap-1.5 transition-colors ${userVote === "down"
                                        ? "text-red-500 dark:text-red-400"
                                        : "hover:text-red-500 dark:hover:text-red-400"
                                    }`}
                            >
                                <FaArrowDown size={14} />
                                <span className="text-sm font-medium">{post.downvotes}</span>
                            </button>

                            <span className="flex items-center gap-1.5 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                <FaRegCommentDots size={14} />
                                <span className="text-sm font-medium">{post.comments?.length || 0}</span>
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
            <hr className="border-gray-300 dark:border-gray-600 mb-8" />

            <div className="px-6 pb-6">
                <Card>
                    <form onSubmit={handleSubmitComment}>
                        <h3 className="text-black dark:text-white text-lg font-semibold mb-2">Add a Comment</h3>
                        <textarea
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-black dark:bg-[#242424] dark:text-white dark:border-gray-600 dark:focus:border-white dark:placeholder-gray-400"
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
                {(post.comments || []).map((comment) => (
                    <Card key={comment.id}>
                        <div className="text-gray-800 dark:text-gray-100 markdown-content">
                            <ReactMarkdown>{comment.text}</ReactMarkdown>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                                - {comment.author}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{comment.timeAgo}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
        </>
    );
}
