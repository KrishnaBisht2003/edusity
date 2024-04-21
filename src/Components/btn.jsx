import React from "react";

const Button = ({ children = "btn", color = "#ffff", flagImg = false }) => {
  let styleBtn = {
    backgroundColor: color,
    color: "black",
    padding: "10px 20px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div className="btn">
      <button style={styleBtn}>
        {children}
        <span>
          {flagImg && (
            <img src="src\assets\dark-arrow.png" alt="" className="h-3 ml-2" />
          )}
        </span>
      </button>
    </div>
  );
};

export default Button;
