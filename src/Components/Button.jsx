import React from 'react'


function Button({ color = "#ffff", flagImg = false }) {

    let styleBtn = {
        backgroundColor: {color},
        color: "black",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    };

  return (
    <>
        <button className = '' style={styleBtn}></button>
    </>
  )
}

export default Button