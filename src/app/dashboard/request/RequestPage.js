"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import RequestPost from "./RequestPosts";
import CreateRequestModal from "./CreateRequestPost";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";

export default function RequestPage() {
  const { user, userRequests, addRequest, updateRequest } = useAuth();
  const router = useRouter();
  const filterTabs = ["Incoming", "Outgoing"];
  const [activeFilterTab, setActiveFilterTab] = useState("Incoming");
  const [isCreateRequestOpen, setIsCreateRequestOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
   setSearchQuery(query.toLowerCase());
  };

  const handleAddRequest = () => {
    setIsCreateRequestOpen(true);
  };

  const handleCreateRequest = (newRequest) => {
    const requestwithType = { ...newRequest, type: "Outgoing" };
    addRequest(requestwithType, user?.email);
    setActiveFilterTab("Outgoing");
    setIsCreateRequestOpen(false);
  };

  const handleRequestClick = (requestId) => {
    router.push(`/dashboard/request/${requestId}`);
  };

  const handleTogglePriority = (requestId) => {
    const userReqs = userRequests?.[user?.email] || [];
    const request = userReqs.find(r => r.id === requestId);
    if (request && request.type === "Incoming") {
      updateRequest(requestId, { highPriority: !request.highPriority }, user?.email);
    }
  };

  const userReqs = userRequests?.[user?.email] || [];

  const sortedRequests = [...userReqs].sort((a, b) => {
    if (a.highPriority && !b.highPriority) return -1;
    if (!a.highPriority && b.highPriority) return 1;
    return a.title.localeCompare(b.title);
  });

  const filteredByTypeRequests = sortedRequests.filter((request) =>
    request.type === activeFilterTab
  );

  const filteredRequests = filteredByTypeRequests.filter((request) =>
    request.title.toLowerCase().includes(searchQuery) ||
    request.preview.toLowerCase().includes(searchQuery)
  );

  useEffect(() => {
    document.title = 'Requests | Make-It-All';
  }, []);

  return (
    <div className="w-6xl mx-auto px-4 py-6 min-h-full">
      {/* Search Bar */}
      <div className="mb-6 flex">
        <SearchBar onSearch={handleSearch} onAdd={handleAddRequest} />
        <Button outerStyle={{width: "47px", height: "47px"}} textStyle={{fontSize: "30px"}} text={"+"} onClick={handleAddRequest}/>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <NavBar
          items={filterTabs}
          activeTab={activeFilterTab}
          setActiveTab={setActiveFilterTab}
        />
      </div>

      {/* Request List */}
      <div className="space-y-4">
        {filteredRequests.map((request) => (
          <RequestPost
            key={request.id}
            request={request}
            onClick={() => handleRequestClick(request.id)}
            onTogglePriority={() => handleTogglePriority(request.id)}
          />
        ))}
      </div>

      {/* Create request Modal */}
      <CreateRequestModal
        isOpen={isCreateRequestOpen}
        onClose={() => setIsCreateRequestOpen(false)}
        onSubmit={handleCreateRequest}
      />
    </div>
  );
}
