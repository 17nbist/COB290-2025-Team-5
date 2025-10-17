"use client";
import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import Member from "./Member";

export default function TaskViewMembers() {
  const filterTabs = ["Name", "Workload"];
  const [activeFilterTab, setActiveFilterTab] = useState("Workload");

  const [members, setMembers] = useState([
    {
      id: 1,
      title: "Ryan Mitchell",
      preview: "Lead Software Engineer",
    },
    {
      id: 2,
      title: "Neha Sharma",
      preview: "Senior Software Engineer",
    },
    {
      id: 3,
      title: "Sofia Rivera",
      preview: "Software Engineer",
    },
    {
      id: 4,
      title: "Andrei Petrov",
      preview: "Junior Software Engineer",
    },
  ]);

  const handleSearch = (query) => {
    console.log("Searching for:", query); // future search feature
  };

  const handleAddMember = () => {
    console.log("Add new member"); // for managers in future
  };

  const handleMemberClick = (memberId) => {
    console.log("Clicked member:", memberId);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "1000px",
        padding: "40px 20px",
      }}
    >
      {/* Row container for search + filters */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {/* Search Bar (centered) */}
        <div style={{ flex: "0 1 400px" }}>
          <SearchBar onSearch={handleSearch} onAdd={handleAddMember} />
        </div>

        {/* Filters to the right */}
        <div style={{ flex: "0 1 auto" }}>
          <NavBar
            items={filterTabs}
            activeTab={activeFilterTab}
            setActiveTab={setActiveFilterTab}
          />
        </div>
      </div>

      {/* Members List */}
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {members.map((member) => (
          <Member
            key={member.id}
            member={member}
            onClick={() => handleMemberClick(member.id)}
          />
        ))}
      </div>
    </div>
  );
}