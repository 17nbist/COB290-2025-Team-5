"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

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
            timeAgo: "just now",
        };

        onSubmit(newRequest);

        // Reset form
        setTitle("");
        setContent("");
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ">
            <div className="bg-gray-800  rounded-xl max-w-2xl w-full p-6 shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-100">Create New Request</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-200 transition-colors"
                    >
                        <FaTimes size={24} />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    {/* Title Input */}
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a descriptive title..."
                            className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Content Textarea */}
                    <div className="mb-4">
                        <label className="block text-gray-300 text-sm font-medium mb-2">
                            Content *
                        </label>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Write your post content here. Be descriptive and provide context..."
                            rows={8}
                            className="w-full bg-gray-700 text-gray-100 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            required
                        />
                        <p className="text-gray-500 text-xs mt-1">
                            {content.length} characters
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Create Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}