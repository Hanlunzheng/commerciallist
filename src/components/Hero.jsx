import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-autdo text-center flex flex-col justify-center">
        <p className="text-[#00df91] font-bold p-2">
          Growing with data analytic
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with data
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            string={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={120}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 ">
          This is just a demo
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
