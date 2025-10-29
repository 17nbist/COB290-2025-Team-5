"use client";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import RequestPost from "./RequestPosts";
import CreateRequestModal from "./CreateRequestPost";
import Button from "@/components/Button";
import { useEffect, useState } from "react";

export default function RequestPage() {
  const filterTabs = ["Incoming", "Outgoing"];
  const [activeFilterTab, setActiveFilterTab] = useState("Incoming");
  const [isCreateRequestOpen, setIsCreateRequestOpen] = useState(false);

  const [Request, setRequest] = useState([
    {
      id: 1,
      title: "Need new pens?",
      preview: "Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah...",
      timeAgo: "2 hours ago",
      highPriority: false,
      type: "Incoming",
    },
    {
      id: 2,
      title: "Request 2",
      preview: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque...",
      timeAgo: "2 hours ago",
      highPriority: false,
      type: "Incoming",
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
   setSearchQuery(query.toLowerCase());
  };

  const handleAddRequest = () => {
    setIsCreateRequestOpen(true);
  };

  const handleCreateRequest = (newRequest) => {
    const requestwithType = { ...newRequest, type: "Outgoing" };
    setRequest([requestwithType, ...Request]);

    setActiveFilterTab("Outgoing");

    setIsCreateRequestOpen(false);
  };

  const handleRequestClick = (requestId) => {
    console.log("Clicked request:", requestId);
  };

  const handleTogglePriority = (requestId) => {
    const updatedRequests = Request.map((request) => {
      if (request.id === requestId && request.type === "Incoming") {
        return { ...request, highPriority: !request.highPriority };
      }
      return request;
    });
    setRequest(updatedRequests);
  };

  const sortedRequests = [...Request].sort((a, b) => {
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
    <div className="max-w-6xl mx-auto px-4 py-6">
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
