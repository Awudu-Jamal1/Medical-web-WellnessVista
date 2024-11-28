import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home1.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10 tilt-in-left-1">
        <h1 className="text-5xl font-bold leading-tight ">
          Shaping the Future of Healthcare: Embracing Innovation for Better
          Health
        </h1>
        <p>
          At Murphy, we harness technology to build a healthier, sustainable
          future. Through partnerships with stakeholders, we implement solutions
          that enhance healthcare access, quality, and outcomes across the globe.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
