import React, { useState } from "react";
// import { Link } from "react-scroll";

import Button from "../layouts/Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";
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
            <Link to="home" spy={true} smooth={true} duration={500}>
              <div>
              <img src={mainLogo} className="h-22 w-64 "  alt="" />
              </div>
                
              
            </Link>
          </div>

          <nav className="  hidden lg:flex md:flex flex-row  lg:text-md text-md font-medium ">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor border-l px-8 py-8  transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
            
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor border-l px-8 py-8 transition-all cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor border-l px-8 py-8 transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="technologies"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor border-l px-8 py-8 transition-all cursor-pointer"
            >
              Technologies
            </Link>
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

          <div className=" hidden md:flex  place-self-center lg:flex">
            <button
              className="bg-brightColor  text-white px-4 py-2  hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={()=>navigate("/contact")}
            >
              Contact Us
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

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
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Technologies
          </Link>
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

          <div className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
