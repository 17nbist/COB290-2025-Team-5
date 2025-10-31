"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function CreateRequestModal({ isOpen, onClose, onSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("Please fill in title and content");
            return;
        }

        // Create better preview (truncate at word boundary)
        const createPreview = (text) => {
            if (text.length <= 100) return text;
            const truncated = text.substring(0, 100);
            const lastSpace = truncated.lastIndexOf(' ');
            return truncated.substring(0, lastSpace) + '...';
        };

        // Create post object
        const newRequest = {
            id: Date.now(),
            title: title.trim(),
            preview: createPreview(content.trim()),
            content: content.trim(),
            timeAgo: "just now",
            highPriority: false,
        };

        onSubmit(newRequest);

        // Reset form
        setTitle("");
        setContent("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card style={{maxWidth: "600px", width: "100%"}}>
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Create New Request</h2>
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
                        <label className="block text-sm font-medium mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a descriptive title..."
                            className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white"
                            required
                        />
                    </div>

                    {/* Content Textarea */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                            Content *
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write your request content here. Be descriptive and provide context..."
                            rows={8}
                            className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white resize-none"
                            required
                        />
                        <p className="text-gray-500 text-xs mt-1">
                            {content.length} characters
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 justify-end">
                        <Button text="Cancel" onClick={onClose} type="button" />
                        <Button text="Create Request" type="submit" />
                    </div>
                </form>
            </Card>
        </div>
    );
}