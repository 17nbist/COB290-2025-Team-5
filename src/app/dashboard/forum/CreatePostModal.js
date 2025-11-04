"use client";
import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function CreatePostModal({ isOpen, onClose, onSubmit, userEmail }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [flair, setFlair] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim() || !flair.trim()) {
            alert("Please fill in title, content and flair.");
            return;
        }

        const createPreview = (text) => {
            if (text.length <= 100) return text;
            const truncated = text.substring(0, 100);
            const lastSpace = truncated.lastIndexOf(' ');
            return truncated.substring(0, lastSpace) + '...';
        };

        const newPost = {
            id: Date.now(),
            title: title.trim(),
            flair: flair,
            preview: createPreview(content.trim()),
            content: content.trim(),
            timeAgo: "just now",
            tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag),
            upvotes: 0,
            downvotes: 0,
            comments: [],
            author: userEmail,
            directedTo: null
        };

        onSubmit(newPost);

        setTitle("");
        setContent("");
        setTags("");
        setFlair("");
        onClose();
    };

    useEffect(() => {
        if (!isOpen || !onClose) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-[#0000007d] bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget && onClose) {
                    onClose();
                }
            }}
            role="dialog"
            aria-modal="true"
        >
            <Card style={{ maxWidth: "600px", width: "100%" }}>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-black dark:text-white text-2xl font-bold">Create New Post</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-black dark:hover:text-gray-200 transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Title Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                            Title *
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a descriptive title..."
                            className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:text-white dark:border-gray-600 dark:focus:border-white dark:placeholder-gray-400"
                            required
                        />
                    </div>

                    {/* Flair Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                            Flair *
                        </label>
                        <select
                            className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:text-white dark:border-gray-600 dark:focus:border-white"
                            onChange={(e) => setFlair(e.target.value)}
                            value={flair}
                            required>
                            <option value="" disabled>--Select an option--</option>
                            <option value="technical">Technical</option>
                            <option value="non-technical">Non-Technical</option>
                        </select>
                    </div>

                    {/* Content Textarea */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                            Content *
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write your post content here. Be descriptive and provide context."
                            rows={8}
                            className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:text-white dark:border-gray-600 dark:focus:border-white dark:placeholder-gray-400 resize-none"
                            required
                        />
                        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
                            {content.length} characters
                        </p>
                    </div>

                    {/* Tags Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2 text-black dark:text-white">
                            Tags (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            placeholder="e.g., api, help, question"
                            className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:text-white dark:border-gray-600 dark:focus:border-white dark:placeholder-gray-400"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 justify-end">
                        <Button text="Cancel" onClick={onClose} type="button" />
                        <Button text="Create Post" type="submit" />
                    </div>
                </form>
            </Card>
        </div>
    );
}
