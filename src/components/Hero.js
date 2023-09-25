import React from "react";
import denim from "../assets/denim.png";
import hoodie from "../assets/hoodie.png";
import indoor from "../assets/hero-bcg.jpeg";
import { IoSparklesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="flex w-full h-4/5 pt-32 -mt-20 pb-20 bg-orange-200">
        <div className="p-16 pb-0 mt-14">
          <h1>Your New Fashion Start Here!</h1>
          <p>a bit description about whats going on</p>
          <Link to="products">
            <button className="w-1/2 py-5 bg-orange-500 rounded-full border-2 border-black md:w-2/6 text-xl font-semibold text-sky-100 mt-5 hover:bg-orange-300 hover:text-black">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="w-1/2 invisible md:visible">
          <div
            className="w-[80%] h-[80%] bg-orange-500 relative border-black border-2
           mx-auto mt-14 rounded-lg "
          >
            <img
              src={denim}
              className="absolute z-10 -right-8 -top-10 rounded-lg -rotate-6 shadow-2xl border-2 border-dashed border-black"
            />
            <img
              src={indoor}
              className="w-full h-full rotate-3 rounded-lg shadow-lg"
            />
            <img
              src={hoodie}
              className="absolute -bottom-7 -left-8 rounded-lg -rotate-6 shadow-2xl border-2 border-dashed border-black"
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full my-5 h-8 bg-red-400 flex rotate-1 place-items-center -mt-5 border-y-2 border-black invisible md:visible">
        <div className="flex justify-center items-center mx-auto invisible lg:visible">
          <span className="px-10">Cek Toko Sebelah</span>
          <IoSparklesOutline />
          <span className="px-10">Discount Up to 50%</span>
          <IoSparklesOutline />
          <span className="px-10">Best Fashion</span>
          <IoSparklesOutline />
          <span className="px-10">New Arrivals</span>
          <IoSparklesOutline />
          <span className="px-10">New Collection</span>
          <IoSparklesOutline />
        </div>
      </div> */}
    </>
  );
};

export default Hero;
