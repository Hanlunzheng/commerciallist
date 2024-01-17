import React from "react";
import Double from "../assets/double.png";
import Single from "../assets/single.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="."
          />
          <h2 className="text-2xl font-bold py-8 text-center">Single User</h2>
          <p className="text-4xl font-bold  text-center">$149</p>
          <div className="text-center font-medium mt-3">
            <p className="py-2 border-b mx-8">1 Granted </p>
            <p className="py-2 border-b mx-8">500 GB Storeage</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Selected
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="."
          />
          <h2 className="text-2xl font-bold py-8 text-center">Double User</h2>
          <p className="text-4xl font-bold  text-center">$149</p>
          <div className="text-center font-medium mt-3">
            <p className="py-2 border-b mx-8">1 Granted </p>
            <p className="py-2 border-b mx-8">500 GB Storeage</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Selected
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="."
          />
          <h2 className="text-2xl font-bold py-8 text-center">Triple User</h2>
          <p className="text-4xl font-bold  text-center">$149</p>
          <div className="text-center font-medium mt-3">
            <p className="py-2 border-b mx-8">1 Granted </p>
            <p className="py-2 border-b mx-8">500 GB Storeage</p>
            <p className="py-2 border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
