"use client";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import NavBar from "@/components/NavBar";

export default function DashboardTodoCard() {
  const router = useRouter();

  // State to track which stars are active
  const [starred, setStarred] = useState({
    main: false,
    setup: false,
    auth: false,
    test: false,
  });

  const [searchVal, setSearchVal] = useState("");

  const filterTabs = ["Start Date", "End Date", "Name"];
  const [activeFilterTab, setActiveFilterTab] = useState(null); // ✅ no filter selected initially

  // Toggle a star’s filled state
  const toggleStar = (key) => {
    setStarred((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Card
      className="border border-black hover:bg-gray-100 transition-colors duration-200"
      style={{ color: "black", padding: "16px", width: "100%", height: "100%" }}
    >
      <div className="flex flex-col w-full h-full">
        {/* Header section with title + search + filters */}
        <div className="flex mb-[30px] items-center justify-between w-full">
          {/* Centered title */}
          <h1 className="text-[24px] font-[700] flex-1 text-center">To-Do</h1>

          {/* Search + Filters (aligned right) */}
          <div className="flex items-center justify-end flex-1 gap-[20px] mr-[40px]">
            <SearchBar />
            <NavBar
              items={filterTabs}
              activeTab={activeFilterTab}
              setActiveTab={setActiveFilterTab}
            />
          </div>
        </div>

        {/* Buttons section */}
        <div style={{ height: "100%", overflow: "auto" }}>
          <div className="flex flex-col items-start gap-[10px] pl-[4px]">
            {/* Main button */}
            <div className="relative w-[55%] sm:w-[45%] md:w-[40%]">
              <button
                onClick={() => router.push("/task-view")}
                className="bg-transparent text-black text-[16px] font-bold px-3 py-2 rounded-md w-full text-center hover:text-gray-600 transition relative"
              >
                Google Authentication
              </button>
              <button
                onClick={() => toggleStar("main")}
                className="absolute bottom-1 right-2 text-yellow-500"
              >
                {starred.main ? (
                  <FaStar className="text-[14px]" />
                ) : (
                  <FaRegStar className="text-[14px]" />
                )}
              </button>
            </div>

            {/* Smaller To-Do buttons */}
            {[
              { key: "setup", label: "Setup" },
              { key: "auth", label: "Authentication" },
              { key: "test", label: "Testing" },
            ].map(({ key, label }) => (
              <div
                key={key}
                className="relative w-[55%] sm:w-[45%] md:w-[40%]"
              >
                <button className="bg-white text-black px-3 py-1.5 text-[13px] rounded-md border border-gray-400 hover:bg-gray-200 transition w-full text-center relative">
                  {label}
                </button>
                <button
                  onClick={() => toggleStar(key)}
                  className="absolute bottom-1 right-2 text-yellow-500"
                >
                  {starred[key] ? (
                    <FaStar className="text-[12px]" />
                  ) : (
                    <FaRegStar className="text-[12px]" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
