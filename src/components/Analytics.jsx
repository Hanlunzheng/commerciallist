import React from "react";
import Labtop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img classname="w-[500px] mx-auto my-4" src={Labtop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df91] uppercase">Data Analytics DashBoard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Cenetrally
            {/* md:text-4xl: This class is likely using a responsive utility class from a CSS framework like Tailwind CSS or a similar framework. It sets the font size to "4xl" on medium-sized screens (md stands for medium). */}
            {/* sm:text-3xl: Similar to the first class, this sets the font size to "3xl" on small screens (sm stands for small). */}
            {/* text-2xl: This class sets the font size to "2xl" on all screen sizes. It's not responsive and will be the same size regardless of the device. */}
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            quas praesentium doloremque suscipit, vel enim facere quia, commodi
            corporis dolor, alias explicabo. Eum facilis consectetur delectus
            harum rerum sed obcaecati.
          </p>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
