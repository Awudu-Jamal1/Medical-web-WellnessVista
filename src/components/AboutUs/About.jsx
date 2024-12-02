import React from "react";
// import img from "../../assets/img/about.jpg";
import groupwork from "../../assets/img/group.jpg"

const About = () => {
  return (
    <>
    <div className="py-24">
      <div className="text-center py-16">
        <h6 className="uppercase text-sm text-backgroundColor font-semibold py-2">About us</h6>
        <h1 className="text-5xl font-bold">Know More About The Business</h1>
      </div>
      
    <div className="  flex flex-col lg:flex-row justify-between   gap-16">
      <div></div>
      <div className=" w-full lg:w-3/4 space-y-4 px-3">
      
        
        <p className=" text-justify font-semibold lg:text-start f text-2xl tracking-wide text-gray-600">
       <span className="text-backgroundColor font-semibold leading-10"> Murphy eHealth Technologies Limited</span>  is a leading provider of innovative healthcare
solutions, dedicated to transforming the healthcare industry through the integration of
cutting-edge technology. 
        </p>
        <p className="text-justify font-semibold lg:text-start text-gray-600 text-2xl leading-10 tracking-wide">
        We specialize in developing advanced, reliable, and
scalable systems that improve the delivery of healthcare services, enhance patient
outcomes, and optimize operational efficiencies. Our team combines expertise in
medical technology, software engineering, and healthcare management to offer
state-of-the-art solutions tailored to the unique needs of healthcare providers and
organizations.
        </p>
        {/* <p className="text-justify lg:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
          Accusantium ab expedita veniam nobis aut, in rerum repellendus!
          Exercitationem libero recusandae corrupti accusantium reiciendis in
          placeat illo maxime ea.
        </p> */}
      </div>
      <div className=" w-full lg:w-3/4">
        <img className="w-full h-full rounded-lg" src={groupwork} alt="img" />
      </div>
    </div>
      </div></>
  );
};

export default About;
