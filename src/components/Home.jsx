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
          Embracing Innovation for Better Health
        </p>
        <p className="mt-8 max-w-lg  text-sm leading-loose tracking-wider font-semibold">
          MeHT Limited utilizes advanced technology to improve healthcare
          access, quality, and outcomes. Through <span className="font-semibold">eHealth</span> , <span className="font-semibold">IoT solutions</span> , and
          <span className="font-semibold">compassionate domiciliary care</span>  , we empower providers and patients for
          better health management globally. settings.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;
