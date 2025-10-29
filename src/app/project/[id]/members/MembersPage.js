"use client";
import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import Member from "./Member";
import Button from "@/components/Button";
import { useAuth } from "@/lib/AuthContext";

export default function MembersPage({members}) {
    const { user } = useAuth();
    const filterTabs = ["Name", "Workload"];
    const [activeFilterTab, setActiveFilterTab] = useState("Workload");
  
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
            <SearchBar onSearch={handleSearch} />
            {user?.role == "manager" && <Button outerStyle={{width: "47px", height: "47px"}} textStyle={{fontSize: "30px"}} text={"+"} onClick={handleAddMember}/>}
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