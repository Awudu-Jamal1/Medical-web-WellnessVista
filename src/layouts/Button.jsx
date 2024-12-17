import React from "react";

const Button = ({ title }) => {
  return (
    <div className="mt-8">
      <button className=" bg-brightColor text-white px-8 py-3 uppercase font-semibold tracking-widest text-xs hover:bg-hoverColor transition duration-300 ease-in-out">
        {title}
      </button>
    </div>
  );
};

export default Button;
