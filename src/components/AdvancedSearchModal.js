"use client";
import { useState, useEffect } from "react";
import { FaTimes, FaSearch } from "react-icons/fa";
import Card from "./Card";
import Button from "./Button";

export default function AdvancedSearchModal({ isOpen, onClose, onSearch, allPosts }) {
  const [filters, setFilters] = useState({
    keyword: "",
    author: "",
    flair: "",
    tags: [],
    dateFrom: "",
    dateTo: "",
    minUpvotes: "",
    hasComments: false,
  });

  // Extract unique values from posts
  const uniqueAuthors = [...new Set(allPosts?.map(post => post.author) || [])].sort();
  const uniqueFlairs = [...new Set(allPosts?.map(post => post.flair) || [])].sort();
  const allTags = [...new Set(allPosts?.flatMap(post => post.tags) || [])].sort();

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  const handleTagToggle = (tag) => {
    setFilters(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleSearch = () => {
    onSearch(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      keyword: "",
      author: "",
      flair: "",
      tags: [],
      dateFrom: "",
      dateTo: "",
      minUpvotes: "",
      hasComments: false,
    });
    onSearch({});
  };

  // Handle ESC key press to close modal
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

  // Prevent body scroll when modal is open
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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        // Close modal when clicking backdrop (but not when clicking content)
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
    >
      <Card style={{ maxWidth: "700px", width: "100%", maxHeight: "90vh", overflow: "auto" }}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <FaSearch className="text-blue-600" />
            Advanced Search
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black dark:hover:text-gray-200 transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Keyword Search */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Keyword
            </label>
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) => handleFilterChange("keyword", e.target.value)}
              placeholder="Search in title, content, and tags..."
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white"
            />
          </div>

          {/* Author Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Author
            </label>
            <select
              value={filters.author}
              onChange={(e) => handleFilterChange("author", e.target.value)}
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white"
            >
              <option value="">All Authors</option>
              {uniqueAuthors.map(author => (
                <option key={author} value={author}>{author}</option>
              ))}
            </select>
          </div>

          {/* Flair Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Flair
            </label>
            <select
              value={filters.flair}
              onChange={(e) => handleFilterChange("flair", e.target.value)}
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white"
            >
              <option value="">All Flairs</option>
              {uniqueFlairs.map(flair => (
                <option key={flair} value={flair}>{flair}</option>
              ))}
            </select>
          </div>

          {/* Tags Filter */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Tags
            </label>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-3 border border-gray-400 rounded-md dark:border-gray-600">
              {allTags.map(tag => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => handleTagToggle(tag)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    filters.tags.includes(tag)
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            {filters.tags.length > 0 && (
              <p className="text-gray-500 text-xs mt-1">
                Selected: {filters.tags.join(", ")}
              </p>
            )}
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                From Date
              </label>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => handleFilterChange("dateFrom", e.target.value)}
                className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                To Date
              </label>
              <input
                type="date"
                value={filters.dateTo}
                onChange={(e) => handleFilterChange("dateTo", e.target.value)}
                className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white"
              />
            </div>
          </div>

          {/* Minimum Upvotes */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Minimum Upvotes
            </label>
            <input
              type="number"
              value={filters.minUpvotes}
              onChange={(e) => handleFilterChange("minUpvotes", e.target.value)}
              placeholder="e.g., 10"
              min="0"
              className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-black dark:bg-[#242424] dark:border-gray-600 dark:focus:border-white"
            />
          </div>

          {/* Has Comments Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="hasComments"
              checked={filters.hasComments}
              onChange={(e) => handleFilterChange("hasComments", e.target.checked)}
              className="w-4 h-4 border-gray-400 rounded focus:ring-black dark:focus:ring-white"
            />
            <label htmlFor="hasComments" className="ml-2 text-sm">
              Only show posts with comments
            </label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-between mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
          <Button text="Reset Filters" onClick={handleReset} type="button" />
          <div className="flex gap-3">
            <Button text="Cancel" onClick={onClose} type="button" />
            <Button text="Search" onClick={handleSearch} type="button" />
          </div>
        </div>
      </Card>
    </div>
  );
}
