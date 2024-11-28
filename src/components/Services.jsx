import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import service2 from "../assets/img/service1.jpg";
import service3 from "../assets/img/service2.jpg";
import service1 from "../assets/img/homeservice.jpg";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate=useNavigate()

  return (
    <div className="  grid lg:grid-cols-2 text-white  bg-footer  justify-center lg:px-32 px-5  gap-20 py-28 ">
      <div>
        <img className="imageSlizer" src={service1} alt="" />
      </div>
      <div className="px-2">
        <div className="text-backgroundColor  py-5 tracking-wider font-bold">
          OUR SERVICE
        </div>
        <div>
          <div className="max-w-4xl py-2 m-auto  leading-relaxed">
            <h1 className="text-5xl   font-bold tracking-wide">
              Managed I.T. solutions tailored to your business.
            </h1>
          </div>
          <p className="max-w-5xl m-auto font-semibold  leading-relaxed tracking-wide">
            At Murphy, we provide customized IT solutions designed to meet the
            unique needs of your business. From infrastructure management to
            cybersecurity, our services ensure your operations run smoothly and
            securely, allowing you to focus on growth.
          </p>
          <div className="pt-5">
            <Link to={'/services'}>
            <button  className="bg-backgroundColor rounded-md text-white py-3 px-5 font-bold">
              Learn More
            </button></Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
