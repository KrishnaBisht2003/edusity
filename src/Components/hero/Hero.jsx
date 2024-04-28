import React from "react";
import heroImg from "../../assets/hero.png";
import Button from "../btn";

function Hero() {
  return (
    <div
      id="Hero"
      className="h-screen bg-center text-[#ffffff] bg-gradient-to-r flex m-auto from-blue-500 to-purple-500 bg-cover flex"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7),rgba(8,0,58,0.7)), url(${heroImg})`,
      }}
    >
      <div className="text-center max-w-[800px] px-[40px] lg:px-0 flex font-sans items-center justify-center m-auto flex-col">
        <h1 className=" text-6xl font-semibold">
          We Ensure better education for a better world
        </h1>
        <p className="py-10">
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <div className="exploreBtn flex justify-center ">
          <Button children="Explore More " flagImg />
        </div>
      </div>
    </div>
  );
}

export default Hero;
