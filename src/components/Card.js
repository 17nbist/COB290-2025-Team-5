export default function Card({children, style, hoverStyle}) {
  const defaultStyle = {
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    transform: "translateY(0px)",
    transition: "transform 0.2s, box-shadow 0.2s"
  };

  const combinedStyle = {...defaultStyle, ...style};

  const defaultHoverStyle = {
    transform: "translateY(-1px)",
    boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
  };

  const combinedHoverStyle = {...defaultHoverStyle, ...hoverStyle};

  return (
    <div style={combinedStyle} 
      onMouseEnter={e => Object.assign(e.currentTarget.style, combinedHoverStyle)}
      onMouseLeave={e => Object.assign(e.currentTarget.style, combinedStyle)}
    >
      {children}
    </div>
  );
}