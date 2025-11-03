"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import ForumPost from "./ForumPost";
import CreatePostModal from "./CreatePostModal";
import AdvancedSearchModal from "@/components/AdvancedSearchModal";
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
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [advancedFilters, setAdvancedFilters] = useState({});
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

    // Apply advanced filters
    if (Object.keys(advancedFilters).length > 0) {
      // Keyword filter
      if (advancedFilters.keyword?.trim()) {
        const query = advancedFilters.keyword.toLowerCase();
        filtered = filtered.filter(
          (post) =>
            post.title.toLowerCase().includes(query) ||
            post.content.toLowerCase().includes(query) ||
            post.tags.some((tag) => tag.toLowerCase().includes(query))
        );
      }

      // Author filter
      if (advancedFilters.author) {
        filtered = filtered.filter((post) => post.author === advancedFilters.author);
      }

      // Flair filter
      if (advancedFilters.flair) {
        filtered = filtered.filter((post) => post.flair === advancedFilters.flair);
      }

      // Tags filter
      if (advancedFilters.tags && advancedFilters.tags.length > 0) {
        filtered = filtered.filter((post) =>
          advancedFilters.tags.some((tag) => post.tags.includes(tag))
        );
      }

      // Minimum upvotes filter
      if (advancedFilters.minUpvotes) {
        const minUpvotes = parseInt(advancedFilters.minUpvotes);
        filtered = filtered.filter((post) => post.upvotes >= minUpvotes);
      }

      // Has comments filter
      if (advancedFilters.hasComments) {
        filtered = filtered.filter((post) => post.comments && post.comments.length > 0);
      }
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
    setCurrentPage(1);
  };

  const handleAdvancedSearch = (filters) => {
    setAdvancedFilters(filters);
    setSearchQuery(""); // Clear simple search when using advanced
    setCurrentPage(1);
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
    <>
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-full">
        <div className="mb-6">
        <div className="flex">
          <SearchBar
            onSearch={handleSearch}
            onAdvancedSearch={() => setIsAdvancedSearchOpen(true)}
          />
          <Button
            outerStyle={{ width: "47px", height: "47px" }}
            textStyle={{ fontSize: "30px" }}
            text={"+"}
            onClick={handleAddPost}
          />
        </div>

        {/* Active Filters Indicator */}
        {Object.keys(advancedFilters).length > 0 && (
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-600 dark:text-gray-400">Active Filters:</span>
            {advancedFilters.keyword && (
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                Keyword: {advancedFilters.keyword}
              </span>
            )}
            {advancedFilters.author && (
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs">
                Author: {advancedFilters.author}
              </span>
            )}
            {advancedFilters.flair && (
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs">
                Flair: {advancedFilters.flair}
              </span>
            )}
            {advancedFilters.tags && advancedFilters.tags.length > 0 && (
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs">
                Tags: {advancedFilters.tags.join(", ")}
              </span>
            )}
            {advancedFilters.minUpvotes && (
              <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-xs">
                Min Upvotes: {advancedFilters.minUpvotes}
              </span>
            )}
            {advancedFilters.hasComments && (
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs">
                Has Comments
              </span>
            )}
            <button
              onClick={() => {
                setAdvancedFilters({});
                setCurrentPage(1);
              }}
              className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full text-xs hover:bg-red-200 dark:hover:bg-red-800 transition-colors"
            >
              Clear All
            </button>
          </div>
        )}
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

      <AdvancedSearchModal
        isOpen={isAdvancedSearchOpen}
        onClose={() => setIsAdvancedSearchOpen(false)}
        onSearch={handleAdvancedSearch}
        allPosts={allForumPosts || []}
      />
      </div>
    </>
  );
}