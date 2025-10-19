
export default function Button({outerstyle, textStyle, text, icon, onClick}) {

  const defaultTouterStyle = {
    display: "flex",
    borderRadius: "12px",
    backgroundColor: "#000",
    padding: "6px 13px 6px 13px",
    height: "40px",
    alignItems: "center"
  };
  const combinedOuterStyle = {...defaultTouterStyle, ...outerstyle};

  const defaultTextStyle = {
    color : "#fff",
    userSelect : "none",
  };
  const combinedTextStyle = {...defaultTextStyle, ...textStyle};

  return (
    <div onClick={onClick} style={combinedOuterStyle}>
      <h1 style={combinedTextStyle}>{text}</h1>
    </div>
  )
}