import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import service2 from "../assets/img/service1.jpg";
import service3 from "../assets/img/service2.jpg";
import service1 from "../assets/img/discus.png";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className="  relative grid md:grid-cols-2 lg:grid-cols-2  text-white  bg-[#f7f7f7]  justify-center   gap-20  ">
      <div className="">
        <img
          ref={ref}
          className={`imageSlizer  h-full w-full ${inView ? "scale-in-center" : " "}`}
          src={service1}
          alt=""
        />
      </div>
      <div className="px-2 py-32 text-center md:text-left lg:text-left">
        <div className="text-backgroundColor max-w-4xl mt-5 m-auto tex py-5 tracking-wider font-bold">
          OUR SERVICE
        </div>
        <div>
          <div className="max-w-4xl mt-5 m-auto  leading-relaxed">
            <h1 className="text-3xl text-backgroundColor   font-bold tracking-wider">
              Innovation, Care, Efficiency
            </h1>
          </div>
          <p className="lg:max-w-md md:max-w-md max-w-4xl m-auto lg:m-0 md:m-0   mt-10 font text-sm text-gray-500 leading-loose tracking-wider">
            We provide innovative, efficient solutions to enhance healthcare,
            improve patient outcomes, streamline operations, and empower
            providers with scalable systems
          </p>
          <div className="pt-10">
            <Link to={"/services"}>
              <button className="border border-backgroundColor text-xs uppercase text-backgroundColor py-3 px-8 font-bold">
                Learn more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
