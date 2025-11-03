"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ForumPost from "./ForumPost";
import CreatePostModal from "./CreatePostModal";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Forum() {
  const { user, allForumPosts, updateForumPost, addForumPost } = useAuth();
  const filterTabs = ["My Posts", "Directed To Me", "All Posts"];
  const sortTabs = ["Hot", "New", "Top"];
  const [activeFilterTab, setActiveFilterTab] = useState("All Posts");
  const [activeSortTab, setActiveSortTab] = useState("Hot");
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15;

  const getSortedAndFilteredPosts = () => {
    if (!allForumPosts) return [];

    let filtered = [...allForumPosts];

    // Filter by tab
    if (activeFilterTab === "My Posts") {
      filtered = filtered.filter((post) => post.author === user?.email);
    } else if (activeFilterTab === "Directed To Me") {
      filtered = filtered.filter((post) => post.directedTo === user?.email);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.preview.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Sort posts
    if (activeSortTab === "New") {
      // Already in order from newest to oldest (assuming id order)
      filtered.sort((a, b) => b.id - a.id);
    } else if (activeSortTab === "Top") {
      // Sort by upvotes - downvotes
      filtered.sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));
    } 
    else {
      // Hot: combination of votes and recency (simplified Reddit algorithm)
      filtered.sort((a, b) => {
        const scoreA = a.upvotes - a.downvotes;
        const scoreB = b.upvotes - b.downvotes;
        // Favor recent posts with higher scores
        return (scoreB + b.id * 0.01) - (scoreA + a.id * 0.01);
      });
    }

    return filtered;
  };

  const allFilteredPosts = getSortedAndFilteredPosts();
  const totalPages = Math.ceil(allFilteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = allFilteredPosts.slice(startIndex, startIndex + postsPerPage);

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
    addForumPost(postWithAuthor);
  };

  useEffect(() => {
    document.title = "Forum | Make-It-All";
  }, []);

  const router = useRouter();

  const handlePostClick = (postId) => {
    router.push(`/dashboard/forum/${postId}`);
  };

  const handleUpvote = (postId) => {
    const post = allForumPosts.find(p => p.id === postId);
    if (!post) return;

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

    updateForumPost(postId, {
      upvotes: newUpvotes,
      downvotes: newDownvotes,
      userVote: newVoteStatus,
    });
  };

  const handleDownvote = (postId) => {
    const post = allForumPosts.find(p => p.id === postId);
    if (!post) return;

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

    updateForumPost(postId, {
      upvotes: newUpvotes,
      downvotes: newDownvotes,
      userVote: newVoteStatus,
    });
  };

  return (
    <div className="w-6xl mx-auto px-4 py-6 min-h-full ">
      <div className="mb-6 flex">
        <SearchBar onSearch={handleSearch} onAdd={handleAddPost} />
        <Button outerStyle={{width: "47px", height: "47px"}} textStyle={{fontSize: "30px"}} text={"+"} onClick={handleAddPost}/>
      </div>

    <div className="mb-6">
      <NavBar
        items={filterTabs}
        activeTab={activeFilterTab}
        setActiveTab={(tab) => {
          setActiveFilterTab(tab);
          setCurrentPage(1);
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",       // allow wrapping on small screens
          gap: "8px",
        }}
      />
    </div>
      {/* Thin faint line */}
    <div className="w-full border-t border-black dark:border-gray-300 my-4"></div>

    <div className="mb-6">
      <NavBar
        items={sortTabs}
        activeTab={activeSortTab}
        setActiveTab={(tab) => {
          setActiveSortTab(tab);
          setCurrentPage(1);
        }}
        style={{
          display: "flex",
          flexWrap: "wrap",       // allow wrapping on small screens
          gap: "8px",
        }}
      />
    </div>
    <div className="space-y-4">
      {paginatedPosts.length === 0 ? (
        <div className="text-center text-gray-400 dark:text-gray-400 py-12">
          No posts found
        </div>
      ) : (
        paginatedPosts.map((post) => (
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
    {totalPages > 1 && (
      <div className="flex justify-center items-center gap-2 mt-6">
        <Button
          text="Previous"
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          outerStyle={{ opacity: currentPage === 1 ? 0.5 : 1 }}
        />
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          text="Next"
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          outerStyle={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
        />
      </div>
    )}

    <CreatePostModal
      isOpen={isCreatePostOpen}
      onClose={() => setIsCreatePostOpen(false)}
      onSubmit={handleCreatePost}
      userEmail={user?.email}
    />
    </div>
  );
}