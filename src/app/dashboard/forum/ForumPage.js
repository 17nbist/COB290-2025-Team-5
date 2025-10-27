"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ForumPost from "./ForumPost";
import CreatePostModal from "./CreatePostModal";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/AuthContext";
import Button from "@/components/Button";

export default function Forum() {
  const { user, data } = useAuth(); // Get user and data from context
  const filterTabs = ["My Posts", "Directed To Me", "All Posts"];
  const [activeFilterTab, setActiveFilterTab] = useState("All Posts");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Get posts from context, fallback to empty array
  const [posts, setPosts] = useState(data?.forumPosts || []);

  // Update posts when data changes (when user logs in)
  useEffect(() => {
    if (data?.forumPosts) {
      setPosts(data.forumPosts);
    }
  }, [data]);

  // Filter posts based on active tab and search
  const getFilteredPosts = () => {
    let filtered = [...posts];

    // Apply filter tab using user email
    if (activeFilterTab === "My Posts") {
      filtered = filtered.filter(post => post.author === user?.email);
    } else if (activeFilterTab === "Directed To Me") {
      filtered = filtered.filter(post => post.directedTo === user?.email);
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.preview.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleAddPost = () => {
    setIsCreatePostOpen(true);
  };

  const handleCreatePost = (newPost) => {
    // Add current user as author
    const postWithAuthor = {
      ...newPost,
      author: user?.email
    };
    setPosts([postWithAuthor, ...posts]);
  };

  const handlePostClick = (postId) => {
    console.log("Clicked post:", postId);
  };

  useEffect(() => {
    document.title = 'Forum | Make-It-All';
  }, []);

  const filteredPosts = getFilteredPosts();

  return (
    <div className="w-6xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6 flex">
        <SearchBar onSearch={handleSearch} onAdd={handleAddPost} />
        <Button outerStyle={{width: "47px", height: "47px"}} textStyle={{fontSize: "30px"}} text={"+"} onClick={handleAddPost}/>
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
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No posts found
          </div>
        ) : (
          filteredPosts.map(post => (
            <ForumPost
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post.id)}
            />
          ))
        )}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onSubmit={handleCreatePost}
        userEmail={user?.email}
      />
    </div>
  );
}