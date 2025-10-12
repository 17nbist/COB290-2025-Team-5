export default function NavPill({style, title, active, setActiveTab}) {
  const defaultStyle = {
    display : "flex",
    alignItems : "center",
    justifyContent: "center",
    padding: "2px 5px 2px 5px",
    borderRadius: "12px",
    border: "1px",
    backgroundColor: active ? "#000000" : "#ffffff",
    width: "120px",
    height: "40px",
    transition: "background-color 0.3s ease, transform 0.2s ease"
  };

  const combinedStyle = {...defaultStyle, ...style};

  const textStyle = {
    color: active ? "#ffffff" : "#000000", 
    fontSize: "20px", 
    userSelect: "none",
    transition: "color 0.3s ease"
  };

  return (
    <div style={combinedStyle} onClick={() => setActiveTab(title)}>
      <h1 style={textStyle}>{title}</h1>
    </div>
  );
}