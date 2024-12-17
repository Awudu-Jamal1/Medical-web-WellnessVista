import React from "react";
// import img from "../../assets/img/about.jpg";
import groupwork from "../../assets/img/group.jpg"

const About = () => {
  return (
    <>
    <div className="py-16">
      <div className="text-center py-8">
        <h6 className="text-backgroundColor max-w-4xl mt-5 text-sm m-auto tex py-5 tracking-wider font-bold">About us</h6>
        <h1 className="text-3xl text-backgroundColor   font-bold tracking-wider">Know More About The Business</h1>
      </div>
      
    <div className="  flex flex-col lg:flex-row justify-between  place-items-center bg-[#f7f7f7]  gap-16">
      <div></div>
      <div className=" w-full lg:w-3/4 space-y-4 px-3">
      
        
        <p className=" text-justify mt-10 font text-sm text-gray-500 leading-loose tracking-wider">
       <span className="text-backgroundColor font-semibold leading-10"> Murphy eHealth Technologies Limited</span>  is a leading provider of innovative healthcare
solutions, dedicated to transforming the healthcare industry through the integration of
cutting-edge technology. 
        </p>
        <p className="text-justify mt-10 font text-sm text-gray-500 leading-loose tracking-wider">
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
        <img className="w-full h-full " src={groupwork} alt="img" />
      </div>
    </div>
      </div></>
  );
};

export default About;
