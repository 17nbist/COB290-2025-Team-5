import { motion, AnimatePresence } from "framer-motion";
import NavPill from "./NavPill";

export default function NavBar({style, 
  pillStyle, 
  textStyle, 
  items, 
  activeTab, 
  setActiveTab, 
  setHash
}){
  const defaultStyle = {
    display: "flex",
    gap: "8px",
    flexWrap: "nowrap", 
    overflowX: "auto", 
    overflowY:"hidden",
    padding: "0 8px",   
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const combinedStyle = {...defaultStyle, ...style};

  return (
    <div style={combinedStyle}>
      {items.map((e) => (
        <div key={e} style={{ position: "relative" }}>
          {activeTab === e && (
            <motion.div
              layoutId="pill-highlight"
              className="absolute inset-0 rounded-[12px] bg-black dark:bg-yellow-400 z-0"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <NavPill
            title={e}
            active={activeTab === e}
            setActiveTab={setActiveTab}
            style={pillStyle}
            textStyle={textStyle}
            setHash={setHash}
          />
        </div>
      ))}
    </div>
  );
}