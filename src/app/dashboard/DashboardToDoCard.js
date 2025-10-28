"use client";
import Card from "@/components/Card";
import { useRouter } from "next/navigation";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";

import {useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isExpanded, setIsExpanded] = useState(false);
  
  const cardRef = useRef(null);


  // Toggle a star’s filled state
  const toggleStar = (key) => {
    setStarred((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Helper function to navigate
  const goToTodo = () => {
    router.push("/task-view#to-do");
  };

  // Collapse when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }
    if (isExpanded) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  return (
    <>
  {/* Overlay */}
  <AnimatePresence>
    {isExpanded && (
      <motion.div
        key="overlay"
        className="fixed inset-0 bg-opacity-90 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsExpanded(false)} 
      />
    )}
  </AnimatePresence>

  {/* Card wrapper for expansion */}
  <motion.div
    layout
    onClick={() => setIsExpanded(true)}
    className="relative z-50 transition-all"
    style={{
      width: isExpanded ? "20vw" : "100%",
      height: isExpanded ? "50vh" : "100%",
      position: isExpanded ? "fixed" : "relative",
      top: isExpanded ? "10%" : "auto",
      left: isExpanded ? "35%" : "auto",
      transform: isExpanded ? "translate(-50%, -50%)" : "none",
    }}
  >
    <Card
      className="
        border border-black 
        bg-gradient-to-r from-pink-300 to-pink-300
      "
      style={{
        color: "black",
        padding: "16px",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex flex-col w-full h-full">
      {/* Header section with title + search + filters */}
      <div className="flex mb-[30px] items-center justify-between w-full px-6">
        <h1 className="text-[24px] font-[700] text-left text-black dark:text-white">
          To-Do
        </h1>
        {/*<div className="flex items-center justify-end gap-[20px]">
          <SearchBar />
          <NavBar
            items={filterTabs}
            activeTab={activeFilterTab}
            setActiveTab={setActiveFilterTab}
          />
        </div>*/}
      </div>

      {/* Buttons section */}
      <div className="relative flex flex-col items-start justify-start gap-[10px] w-full h-full overflow-hidden pl-6">
        {/* Buttons container */}
        <div className="flex flex-col items-start justify-start gap-[10px] w-full">
          {/* Main button */}
          <div className="relative w-full">
            <button
              onClick={() => router.push("/task-view")}
              className={`bg-transparent text-black dark:text-white font-bold px-3 py-2 rounded-md w-full text-left hover:text-gray-600 dark:hover:text-gray-300 transition relative ${
                isExpanded ? "text-[25px]" : "text-[16px]"}`}
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
            <div key={key} className="relative w-full">
              <button
                onClick={goToTodo}
                className={`bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-1.5 rounded-md border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition w-full text-left relative ${
                isExpanded ? "text-[22px]" : "text-[13px]"}`}
              >
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
  </motion.div>
</>

  );
}
