import React from "react";
import denim from "../assets/denim.png";
import hoodie from "../assets/hoodie.png";
import cloth from "../assets/clothes.jpg";
import { Link } from "react-router-dom";
import bgneutral from "../assets/neutralbg.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex w-full h-4/5 pt-20 -mt-20 pb-20 bg-gradient-to-t from-orange-200 to-amber-100">
        <div className="pr-10 pb-0 mt-10">
          <div
            className="border-2 border-black rounded-e-full w-full h-full lg:h-5/6 p-5"
            style={{ backgroundImage: `url(${bgneutral})` }}
          >
            <h1 className="font-bold w-4/5 lg:my-14 bg-gradient-to-b from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Your New Fashion Start Here!
            </h1>
            <h2 className="font-semibold">One Store For</h2>
            <h2 className="font-bold text-white rounded bg-zinc-800 underline w-fit p-3">
              Many Things
            </h2>
            <Link
              to="products"
              className="px-2 py-1 inline-block bg-orange-500 rounded-full border-2 border-black md:text-xl font-semibold text-white mt-5 hover:bg-orange-300 hover:text-black"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <div
            className="w-[80%] h-[80%] bg-orange-500 relative border-black border-2
           mx-auto mt-14 rounded-lg "
          >
            <img
              src={denim}
              alt="denim"
              className="absolute z-10 -right-8 -top-10 rounded-lg -rotate-6 shadow-2xl border-2 border-dashed border-black"
            />
            <img
              src={cloth}
              alt="cloth"
              className="w-full h-full rotate-3 rounded-lg shadow-lg"
            />
            <img
              src={hoodie}
              alt="hoodie"
              className="absolute -bottom-7 -left-8 rounded-lg -rotate-6 shadow-2xl border-2 border-dashed border-black"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
