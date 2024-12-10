import React, { useState } from "react";
// import { Link } from "react-scroll";

import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import Contact from "../models/Contact";
import { Link, useNavigate } from "react-router-dom";
import mainLogo from "../assets/img/mainLogo2.png"


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate =useNavigate()

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="   text-white">
      <div>
        <div className=" flex flex-row justify-between place-items-center md:px-5  px-2 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <a href="/" >
              <div>
              <img src={mainLogo} className="h-22 w-64 "  alt="" />
              </div>
                
              
            </a>
          </div>

          <nav className="  hidden lg:flex md:flex flex-row  lg:text-md text-md font-medium ">
            <a
            href="/"
              
              className=" hover:text-hoverColor border-l px-8 py-8  transition-all cursor-pointer"
            >
              Home
              <span className="hidden md:block lg:hidden">Medium</span>
            </a>
            <a
            
              href="about"
             
              className=" hover:text-hoverColor border-l  px-8 py-8 transition-all cursor-pointer"
            >
              About
            </a>
            <a
              href="/services"
              className=" hover:text-hoverColor border-l px-8 py-8 transition-all cursor-pointer"
            >
              Services
            </a>
            <a
              href="/technologies"
                            className=" hover:text-hoverColor border-l px-8 py-8 transition-all cursor-pointer"
            >
              Technologies
            </a>
            {/* <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor border-l px-8 py-8 transition-all cursor-pointer"
            >
              Blog
            </Link> */}
          </nav>

          <a className=" hidden md:flex  place-self-center lg:flex" href="/contact">
            <button
              className="bg-brightColor  text-white px-4 py-2  hover:bg-hoverColor transition duration-300 ease-in-out"
              // onClick={()=>navigate("/contact")}
            >
              Contact Us
            </button>
          </a>

          {/* {showForm && <Contact closeForm={closeForm} />} */}

          <div className=" lg:hidden md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden md:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-20 font-semibold  text-md text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <a
            href="/"
            
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="/about"
           
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </a>
          <a
            href="/services"
            
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </a>
          <a
            href="/technologies"
            
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Technologies
          </a>
          {/* <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link> */}

          <a href="/contact" className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
