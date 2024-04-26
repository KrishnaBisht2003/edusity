import React from "react";

const Button = ({ children = "btn", color = "#ffff", text = "black", flagImg = false }) => {
  let styleBtn = {
    backgroundColor: color,
    color: text,
    
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div className=" flex btn items-center justify-center">
      <button style={styleBtn}>
        {children}
        <span>
          {flagImg && (
            <img className = "" src={(text === "black") ? "src/assets/dark-arrow.png" : "src/assets/white-arrow.png"} alt="" className="h-3 ml-2" />
          )}
        </span>
      </button>
    </div>
  );
};

export default Button;
