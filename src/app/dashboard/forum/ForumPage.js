"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ForumPost from "./ForumPost";
import CreatePostModal from "./CreatePostModal";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

import { forumPosts } from "@/lib/base-data/forums";
const forumPostsFromFile = forumPosts;

export default function Forum() {
  const { user, data } = useAuth();
  const filterTabs = ["My Posts", "Directed To Me", "All Posts"];
  const [activeFilterTab, setActiveFilterTab] = useState("All Posts");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (forumPostsFromFile) {
      const postsWithVoteState = forumPostsFromFile.map((p) => ({
        ...p,
        userVote: null,
      }));
      setPosts(postsWithVoteState);
    }
  }, [data]);

  const getFilteredPosts = () => {
    let filtered = [...posts];

    if (activeFilterTab === "My Posts") {
      filtered = filtered.filter((post) => post.author === user?.email);
    } else if (activeFilterTab === "Directed To Me") {
      filtered = filtered.filter((post) => post.directedTo === user?.email);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.preview.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
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
    const postWithAuthor = {
      ...newPost,
      author: user?.email,
      userVote: null,
    };
    setPosts([postWithAuthor, ...posts]);
  };

  useEffect(() => {
    document.title = "Forum | Make-It-All";
  }, []);

  const router = useRouter();

  const filteredPosts = getFilteredPosts();

  const handlePostClick = (postId) => {
    router.push(`/dashboard/forum/${postId}`);
  };

  const handleUpvote = (postId) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== postId) return post;

        let newUpvotes = post.upvotes;
        let newDownvotes = post.downvotes;
        let newVoteStatus = post.userVote;

        switch (post.userVote) {
          case null:
            newVoteStatus = "up";
            newUpvotes += 1;
            break;
          case "up":
            newVoteStatus = null;
            newUpvotes -= 1;
            break;
          case "down":
            newVoteStatus = "up";
            newUpvotes += 1;
            newDownvotes -= 1;
            break;
        }

        return {
          ...post,
          upvotes: newUpvotes,
          downvotes: newDownvotes,
          userVote: newVoteStatus,
        };
      })
    );
  };

  const handleDownvote = (postId) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) => {
        if (post.id !== postId) return post;

        let newUpvotes = post.upvotes;
        let newDownvotes = post.downvotes;
        let newVoteStatus = post.userVote;

        switch (post.userVote) {
          case null:
            newVoteStatus = "down";
            newDownvotes += 1;
            break;
          case "down":
            newVoteStatus = null;
            newDownvotes -= 1;
            break;
          case "up":
            newVoteStatus = "down";
            newDownvotes += 1;
            newUpvotes -= 1;
            break;
        }

        return {
          ...post,
          upvotes: newUpvotes,
          downvotes: newDownvotes,
          userVote: newVoteStatus,
        };
      })
    );
  };

  return (
    <div className="w-6xl mx-auto px-4 py-6">
      <div className="mb-6 flex">
        <SearchBar onSearch={handleSearch} onAdd={handleAddPost} />
        <Button
          outerStyle={{ width: "47px", height: "47px" }}
          textStyle={{ fontSize: "30px" }}
          text={"+"}
          onClick={handleAddPost}
        />
      </div>

      <div className="mb-6">
        <NavBar
          items={filterTabs}
          activeTab={activeFilterTab}
          setActiveTab={setActiveFilterTab}
        />
      </div>

      <div className="space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No posts found
          </div>
        ) : (
          filteredPosts.map((post) => (
            <ForumPost
              key={post.id}
              post={post}
              onClick={handlePostClick}
              onUpvote={handleUpvote}
              onDownvote={handleDownvote}
            />
          ))
        )}
      </div>

      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onSubmit={handleCreatePost}
        userEmail={user?.email}
      />
    </div>
  );
}