import NavPill from "./NavPill";
export default function NavBar({style, 
  pillStyle, 
  textStyle, 
  items, 
  activeTab, 
  setActiveTab, 
  setHash}){
  const defaultStyle = {
    display: "flex",
    gap: "8px",
    flexWrap: "nowrap", 
    overflowX: "auto", 
    overflowY:"hidden",
    padding: "0 8px",   
    scrollbarWidth: "thin", 
  };

  const combinedStyle = {...defaultStyle, ...style};

  return (
    <div style={combinedStyle}>
      {items.map(e => 
        <NavPill key={e} title={e} active={activeTab==e} setActiveTab={setActiveTab} style={pillStyle} textStyle={textStyle} setHash={setHash}/>
      )}
    </div>
  );
}