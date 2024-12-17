import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white  bg-[url('assets/img/main2.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5  mt-28 lg:mt-10 tilt-in-left-1">
        <p className="text-3xl font-bold tracking-widest uppercase py-2  ">
          Shaping the Future of Healthcare
        </p>
        <p className="text-md font-semibold uppercase tracking-widest">
        Embracing Innovation for Better
        Health
        </p>
        <p className="mt-8 max-w-lg  text-sm leading-loose tracking-wider font-semibold">
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
