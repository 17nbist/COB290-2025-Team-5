"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ForumPost from "./ForumPost";
import CreatePostModal from "./CreatePostModal";
import { useState } from "react";
import { useEffect } from 'react';

export default function Forum() {
  const filterTabs = ["My Posts", "Directed To Me", "All Posts"];
  const [activeFilterTab, setActiveFilterTab] = useState("All Posts");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "How Can I Access API keys?",
      preview: "API Keys are for all clients accessible on the staff intranet MakeIToday under the CTO function. Only certain staff are currently...",
      timeAgo: "3 weeks ago",
      tags: ["api", "help"],
      upvotes: 15,
      downvotes: 0,
      comments: 2
    },
    {
      id: 2,
      title: "How can I make a referral for a job posting?",
      preview: "Here at Make-It-All, we value the insights that our staff members have on the job market. For this reason, we have an attractive...",
      timeAgo: "2 weeks ago",
      tags: ["hr", "referral", "recruitment", "selection"],
      upvotes: 10,
      downvotes: 1,
      comments: 10
    },
    {
      id: 3,
      title: "Weekly Guest WiFi Code - Week 45",
      preview: "For security reasons, we have a seperate WiFi code for visitors. This code is updated weekly, ensuring that only genuine...",
      timeAgo: "2 hours ago",
      tags: ["wifi", "tech", "vistors"],
      upvotes: 10,
      downvotes: 0,
      comments: 0
    },
    {
      id: 4,
      title: "Organisational Development: Continuing Professional Development Courses",
      preview: "Here at Make-It-All, we invest in our staff and want to see them develop. After a comprehensive review of our CPD provision...",
      timeAgo: "5 minutes ago",
      tags: ["learning for life", "cpd", "linkedin learing"],
      upvotes: 25,
      downvotes: 1,
      comments: 3
    },
    {
      id: 5,
      title: "Windows 11 Upgrade Information",
      preview: "After many years utilising Windows 10, the Execuitve Management Team have authorised the launch of the Windows 11 Project...",
      timeAgo: "1 day ago",
      tags: ["release", "upgrade", "windows 10", "windows 11", "tech", "it"],
      upvotes: 45,
      downvotes: 4,
      comments: 16
  },
  {
    id: 6,
    title: "Updates to Flexible Working Policy",
    preview: "Following the full return of \"business as usual\", the Executive Management Team have consulted with a range of colleauges...",
    timeAgo: "just now",
    tags: ["return to office", "hr", "mandatory", "update", "redundancy"],
    upvotes: 12,
    downvotes: 60,
    comments: 25
  },


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

  useEffect(() => {
    document.title = 'Forum | Make-It-All';
  }, []);

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
