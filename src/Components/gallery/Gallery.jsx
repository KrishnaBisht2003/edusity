import React from "react";
import gal1 from "../../assets/gallery-1.png";
import gal2 from "../../assets/gallery-2.png";
import gal3 from "../../assets/gallery-3.png";
import gal4 from "../../assets/gallery-4.png";
import Button from "../btn";

function Gallery() {
  return (
    <div
      className="flex flex-col px-[5%] lg:px-[10%] m-auto items-center"
      id="gallery"
    >
      <div className="flex flex-col text-center">
        <p className="text-[#212ea0] text-[20px] font-sans font-semibold">
          Gallery
        </p>
        <h2 className="text-[#000f38] text-[32px] font-sans font-bold">
          Campus Photos
        </h2>
      </div>
      <div className="my-[80px] ">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between items-center m-auto mb-[40px] gap-8 w-[90%]">
          <img className="w-full rounded-2xl " src={gal1} alt="/"></img>
          <img className="w-full rounded-2xl " src={gal2} alt="/"></img>
          <img className="w-full rounded-2xl " src={gal3} alt="/"></img>
          <img className="w-full rounded-2xl " src={gal4} alt="/"></img>
        </div>
        <Button
          color="#212ea0"
          text="#ffffff"
          flagImg="true"
          children="See more here "
        ></Button>
      </div>
    </div>
  );
}

export default Gallery;
