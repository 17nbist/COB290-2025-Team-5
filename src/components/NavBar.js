import NavPill from "./NavPill";
export default function NavBar({style, pillStyle, textStyle, items, activeTab, setActiveTab}) {
  const defaultStyle = {
    display : "flex",
    gap : "8px"
  };

  const combinedStyle = {...defaultStyle, ...style};

  return (
    <div style={combinedStyle}>
      {items.map(e => 
        <NavPill key={e} title={e} active={activeTab==e} setActiveTab={setActiveTab} style={pillStyle} textStyle={textStyle}/>
      )}
    </div>
  );
}