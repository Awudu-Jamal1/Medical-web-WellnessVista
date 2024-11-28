import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/mainLogo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white py-20 mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between md:place-items-center lg:place-items-center p-8 md:px- px-5">
        <div className=" w-full md:w-1/4">
          <div><img src={logo} className="h-32 lg:h-32 md:h-20 w-[]" alt="" /></div>
          <p className=" text-md font-semibold px-10 leading-6 text-left">
            We harness technology to build a healthier, sustainable future.</p>
          <div className="py-5 text-left  px-8">
              <div>
                <span>
                  <FontAwesomeIcon
                    className="text-white px-2 text-[30px]"
                    icon={faFacebook}
                  />
                </span>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-white px-2 text-[30px]"
                    icon={faXTwitter}
                  />
                </span>{" "}
                <span>
                  <FontAwesomeIcon
                    className="text-white px-2 text-[30px]"
                    icon={faLinkedin}
                  />
                </span>
              </div>
            </div>
        </div>
        <div className="font-semibold ">
          <h1 className="  text-xl pb-4 pt-5 md:pt-0">Company</h1>
          <nav className=" flex flex-col font-semibold gap-2">
            <Link
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              About 
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Technologies
            </Link>
          </nav>
        </div>
        <div className="font-semibold">
          <h1 className=" font-md text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Mobile Health Applications
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Telemedicine Solutions
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Healthcare IT Solutions
            </Link>
            
          </nav>
        </div>
        <div className=" w-full md:w-1/4 font-semibold">
          <h1 className="  text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
            14 Claypole Road, London, England, E15 2RJ
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
            info@murphyehealth.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
            +44 77 636 53536
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor"> JAWDU</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
