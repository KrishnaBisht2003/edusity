import React from "react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import Button from "../btn";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-transparent z-10 fixed m-auto w-[100%]">
      <div className=" flex max-w-[1240px] m-auto justify-between items-center p-4 ">
        <img className="w-[180px] " src={logo} alt="logo"></img>
        <ul className="hidden md:flex justify-between font-Montserrat text-[16px] items-center text-white">
          <li className="mx-3 cursor-pointer">Home</li>
          <li className="mx-3 cursor-pointer">Program</li>
          <li className="mx-3 cursor-pointer">About us</li>
          <li className="mx-3 cursor-pointer">Campus</li>
          <li className="mx-3 cursor-pointer">Testimonials</li>
          <li className="mx-3 ">
            <Button>Contact Us</Button>
          </li>
        </ul>
        <div className="w-[30px] flex md:hidden" onClick={handleNav}>
          <img src={menu}></img>
        </div>
        <div
          className={
            nav
              ? "bg-[#243ac7] flex-col md:hidden top-0 right-0 fixed w-[30%] h-full z-[-10] ease-in-out duration-700"
              : "bg-[#af7ecd] flex-col top-0 right-[-100%] fixed h-full z-[-10] ease-linear duration-1000 md:hidden"
          }
        >
          <div className="p-10"></div>
          <ul className=" justify-between font-sans text-[16px] items-center mx-8 text-white">
            <li className="my-4">Home</li>
            <li className="my-4">Program</li>
            <li className="my-4">About us</li>
            <li className="my-4">Campus</li>
            <li className="my-4">Testimonials</li>
            <li className="my-6 ">
              <button className="bg-white text-black rounded-full py-3 px-5 text-black-200">
                Contact us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
