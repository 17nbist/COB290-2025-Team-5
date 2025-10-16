export default function Card({children, style}) {
  const defaultStyle = {
    padding: "20px",
    borderRadius: "8px",
    border: "1px solid #000000",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const combinedStyle = {...defaultStyle, ...style};

  return (
    <div style={combinedStyle}>
      {children}
    </div>
  );
}