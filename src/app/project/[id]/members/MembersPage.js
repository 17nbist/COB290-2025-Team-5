"use client";
import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";
import Member from "./Member";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Card from "@/components/Card";
import { useAuth } from "@/lib/AuthContext";

export default function MembersPage({members, projectId}) {
    const { user } = useAuth();
    const filterTabs = ["Name", "Workload"];
    const [activeFilterTab, setActiveFilterTab] = useState("Name");

    const [showModal, setShowModal] = useState(false);

    const [search, setSearch] = useState("");

    const filteredMembers = members
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
            {user?.role == "manager" && <Button outerStyle={{height: "47px"}} textStyle={{}} text={"edit"} onClick={() => setShowModal(true)}/>}
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
        <EditMembersModal showModal={showModal} setShowModal={setShowModal} members={members} projectId={projectId}/>
      </div>
    );
}

function EditMembersModal({showModal, setShowModal, members, projectId}) {

  const { allUsers, editProjectMembers } = useAuth();

  const [selectedMembers, setSelectedMembers] = useState(members.map(m => m.id));
  const [employeeSearch, setEmployeeSearch] = useState("");
  
  const filteredEmployees = allUsers.filter(e => e.name.toLowerCase().includes(employeeSearch.toLowerCase())).sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  useEffect(() => {
    setSelectedMembers(members.map(m => m.id));
  }, [members])

  function saveMembers() {
    editProjectMembers(projectId, selectedMembers)
    setShowModal(false);
  }

  
  return (
    <Modal isOpen={showModal}> 
      <Card style={{width: "40%"}}>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-1">
            <h1>Members ({selectedMembers.length} selected)</h1>
            <input 
              className="rounded-[3px] outline outline-gray-400"
              type="text"
              placeholder="Search"
              value={employeeSearch}
              onChange={e => setEmployeeSearch(e.target.value)}
            />
            <div className="h-[150px] overflow-auto">
              {
                filteredEmployees.map(member => (
                    <label key={member.id} className="flex items-center gap-2">
                      <input
                      type="checkbox"
                      checked={selectedMembers.includes(member.id)}
                      disabled={member.role == "manager"}
                      onChange={e => {
                        if (e.target.checked) {
                          setSelectedMembers(prev => [...prev, member.id]);
                        }
                        
                        else {
                          setSelectedMembers(prev => prev.filter(x => x !== member.id));
                        }
                      }}
                      />
                      {member?.name || `User ${id}`}
                    </label>

                ))
              }
            </div>
          </div>
          <div className="flex w-full justify-end">
            <div className="flex gap-2">
              <Button onClick={() => setShowModal(false)} text={"Cancel"}/>
              <Button onClick={saveMembers} text={"Save"}/>
            </div>
          </div>
        </div>
      </Card>
    </Modal>
  );
}