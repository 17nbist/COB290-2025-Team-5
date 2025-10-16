"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ForumPost from "./ForumPost";
import CreatePostModal from "./CreatePostModal";
import { useState } from "react";

export default function Forum() {
  const filterTabs = ["My Posts", "Directed To Me", "All Posts"];
  const [activeFilterTab, setActiveFilterTab] = useState("My Posts");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How Can I Access API keys?",
      preview: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque...",
      timeAgo: "2 hours ago",
      tags: ["api", "help"],
      upvotes: 10,
      downvotes: 2,
      comments: 10
    },
    {
      id: 2,
      title: "How Can I Access API keys?",
      preview: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque...",
      timeAgo: "2 hours ago",
      tags: ["api", "help"],
      upvotes: 10,
      downvotes: 2,
      comments: 10
    },
    {
      id: 3,
      title: "How Can I Access API keys?",
      preview: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque...",
      timeAgo: "2 hours ago",
      tags: ["api", "help"],
      upvotes: 10,
      downvotes: 2,
      comments: 10
    }
  ]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const handleAddPost = () => {
    setIsCreatePostOpen(true);
  };

  const handleCreatePost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const handlePostClick = (postId) => {
    console.log("Clicked post:", postId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6">
        <SearchBar onSearch={handleSearch} onAdd={handleAddPost} />
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <NavBar
          items={filterTabs}
          activeTab={activeFilterTab}
          setActiveTab={setActiveFilterTab}
        />
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {posts.map(post => (
          <ForumPost
            key={post.id}
            post={post}
            onClick={() => handlePostClick(post.id)}
          />
        ))}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
}