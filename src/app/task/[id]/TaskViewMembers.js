"use client";
import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import Member from "./Member";
import Button from "@/components/Button";
import { useAuth } from "@/lib/AuthContext";

export default function TaskViewMembers({taskMembers}) {
  const { user } = useAuth();
  const filterTabs = ["Name", "Workload"];
  const [activeFilterTab, setActiveFilterTab] = useState("Name");

  const [search, setSearch] = useState("");

  const filteredMembers = taskMembers
      .filter(e => e.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: "600px",
        padding: "40px 20px",
      }}
    >
      {/* Row container for search + filters */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {/* Search Bar (centered) */}
        <div style={{display: "flex", width: "100%"}}>
          <SearchBar onSearch={setSearch} />
        </div>

        {/* Filters to the right */}
        <NavBar
          items={filterTabs}
          activeTab={activeFilterTab}
          setActiveTab={setActiveFilterTab}
        />
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
        {filteredMembers.map((member) => (
          <Member
            key={member.id}
            member={member}
          />
        ))}
      </div>
    </div>
  );
}