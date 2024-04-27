import React from "react";
import Prog1 from "../../assets/program-1.png";
import Prog2 from "../../assets/program-2.png";
import Prog3 from "../../assets/program-3.png";
import Progicon1 from "../../assets/program-icon-1.png";
import Progicon2 from "../../assets/program-icon-2.png";
import Progicon3 from "../../assets/program-icon-3.png";

function Projects() {
  return (
    <div className="flex  px-[5%] lg:px-[10%] m-auto" id="projects">
      <div className="flex-col items-center text-center justify-center m-auto">
        <p className="text-[15px] mt-[70px] font-sans text-[#212ea0] font-bold">
          OUR PROGRAM
        </p>
        <h1 className="text-[32px] text-[##000f38] mt-[5px] font-bold">
          What We Offer
        </h1>
        <div className="flex flex-col sm:flex-row justify-between items-center my-[80px] w-[90%] gap-10 sm:gap-0 m-auto">
          <div className="sm:w-[31%] relative">
            <img className="rounded-xl" src={Prog1} alt="/"></img>
            <div className="flex flex-col absolute pt-[70%] opacity-0   inset-0 rounded-xl hover:pt-0 transition-all duration-500 ease-in-out hover:bg-[#000f984d] hover:opacity-100 items-center justify-center">
              <img className="w-[60px] mb-3" src={Progicon1}></img>
              <p className="text-white cursor-pointer">Graduation Degree</p>
            </div>
          </div>

          <div className="sm:w-[31%] relative">
            <img className="rounded-xl" src={Prog2} alt="/"></img>
            <div className="absolute inset-0 pt-[70%] flex flex-col justify-center items-center opacity-0 hover:bg-[#000f984d] hover:pt-0 hover:opacity-100 transition-all duration-500 ease-in-out">
              <img className="w-[60px] mb-3" src={Progicon2}></img>
              <p className="text-white cursor-pointer">Masters Degree</p>
            </div>
          </div>

          <div className="sm:w-[31%] relative">
            <img className="rounded-xl" src={Prog3} alt="/"></img>
            <div className="absolute inset-0 flex flex-col justify-center items-center pt-[70%] opacity-0 hover:opacity-100 hover:bg-[#000f984d] hover:pt-0 transition-all duration-500 ease-in-out">
              <img className="w-[60px] mb-3" src={Progicon3}></img>
              <p className="text-white cursor-pointer">Post Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
