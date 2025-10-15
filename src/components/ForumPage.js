"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ForumPost from "@/components/ForumPost";
import { useState } from "react";

export default function Forum() {
  // Filter tabs
  const filterTabs = ["My Posts", "Directed To Me", "All Posts"];
  const [activeFilterTab, setActiveFilterTab] = useState("My Posts");

  // Mock data for posts
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
    // You can filter posts here in the future
  };

  const handleAddPost = () => {
    console.log("Add new post");
    // Handle add post modal/navigation
  };

  const handlePostClick = (postId) => {
    console.log("Clicked post:", postId);
    // Navigate to detailed post view
  };

  return (
    <div style={{ 
      maxWidth: "800px", 
      margin: "0 auto", 
      padding: "20px" 
    }}>
      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} onAdd={handleAddPost} />

      {/* Filter Tabs */}
      <NavBar 
        items={filterTabs} 
        activeTab={activeFilterTab} 
        setActiveTab={setActiveFilterTab}
        style={{ marginBottom: "24px" }}
      />

      {/* Posts List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {posts.map(post => (
          <ForumPost 
            key={post.id} 
            post={post} 
            onClick={() => handlePostClick(post.id)}
          />
        ))}
      </div>
    </div>
  );
}