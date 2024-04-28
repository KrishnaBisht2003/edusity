import React, { useState, useEffect } from "react";

import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu-icon.png";
import Button from "../btn";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={`z-10 fixed w-full py-[15px] sm:py-[7px] lg:py-0 px-[5%] lg:px-[10%] m-auto transition duration-500 ${scrolling ? "bg-[#212ea0]" : "bg-transparent"
        }`}
    >
      <div className="flex max-w-7xl mx-auto justify-between items-center p-[4px]">
        <img className="w-[140px] sm:w-[180px]" src={logo} alt="logo"></img>
        <ul className="hidden md:flex justify-between font-Montserrat text-[12px] lg:text-[16px]  lg:py-[4px] items-center text-white">
          <li className="mx-3 lg:mx-3 cursor-pointer">
            <Link to="Hero" smooth={true} offset={-150} duration={500}>
              Home
            </Link>
          </li>
          <li className="mx-3 lg:mx-3 cursor-pointer">
            <Link to="projects" smooth={true} offset={-90} duration={500}>
              Program
            </Link>
          </li>
          <li className="mx-3 lg:mx-3 cursor-pointer">
            <Link to="about" smooth={true} offset={-150} duration={500}>
              About us
            </Link>
          </li>
          <li className="mx-3 lg:mx-3 cursor-pointer">
            <Link to="gallery" smooth={true} offset={-90} duration={500}>
              Campus
            </Link>
          </li>
          <li className="mx-3 lg:mx-3 cursor-pointer">
            <Link>Testimonials</Link>
          </li>
          <li className="mx-3 lg:mx-3 ">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              <Button>Contact Us</Button>
            </Link>
          </li>
        </ul>
        <div
          className="w-[30px] flex md:hidden cursor-pointer"
          onClick={handleNav}
        >
          <img src={menu} alt="menu"></img>.
        </div>
        <div
          className={
            nav
              ? "bg-[#243ac7] flex-col md:hidden top-0 right-0 fixed w-[30%] h-full z-[-10] ease-in-out duration-700"
              : " flex-col top-0 right-[-100%] fixed h-full z-[-10] ease-linear duration-1000 md:hidden"
          }
        >
          <div className="p-10"></div>
          <ul className="justify-between font-sans text-[16px] items-center mx-8 text-white">
            <li className="my-3 lg:mx-y cursor-pointer">
              <Link to="Hero" smooth={true} offset={-150} duration={500}>
                Home
              </Link>
            </li>
            <li className="my-3 lg:mx-y cursor-pointer">
              <Link to="projects" smooth={true} offset={-90} duration={500}>
                Program
              </Link>
            </li>
            <li className="my-3 lg:mx-y cursor-pointer">
              <Link to="about" smooth={true} offset={-150} duration={500}>
                About us
              </Link>
            </li>
            <li className="my-3 lg:mx-y cursor-pointer">
              <Link to="gallery" smooth={true} offset={-90} duration={500}>
                Campus
              </Link>
            </li>
            <li className="my-3 lg:mx-y cursor-pointer">
              <Link>Testimonials</Link>
            </li>
            <li className="my-3 lg:mx-y ">
              <Link to="contact" smooth={true} offset={-260} duration={500}>
                <button className="bg-white text-black rounded-full py-3 px-5 text-black-200">
                  Contact us
                </button>
              </Link>
            </li>
        </ul>
      </div>
    </div>
    </nav >
  );
}

export default Navbar;
