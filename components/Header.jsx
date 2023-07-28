import React from "react";
import Navbar from "./Navbar";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <section className="px-3 w-full flex flex-col md:min-h-[auto] xl:min-h-screen bg-primary">
      <Navbar />
      <div className="grow flex-col flex xl:flex-row md:flex-col items-center w-full max-w-7xl mx-auto gap-10 py-5 sm:py-0 md:py-10">
        <div className="flex-1 flex flex-col">
          <h1 className="sm:text-[59px] text-3xl xl:text-start text-center leading-[110%] font-extrabold text-black mb-5">
            Discover Your Dream Job in Mauritius!
          </h1>
          <p className="text-black text-sm sm:text-lg xl:text-xl font-semibold sm:font-medium mb-12 xl:text-start text-center">
            Explore a wide range of job opportunities tailored for Mauritians.
            Post your resume, connect with employers, and embark on a fulfilling
            career journey.
          </p>
          <form className="w-full max-w-full items-center h-12 sm:h-14: bg-white flex flex-row p-2 rounded-md">
            <div className="flex items-center flex-1">
              <IoSearch className="text-2xl sm:text-3xl text-black" />
              <input
                type="text"
                className="flex-1 px-3 w-full h-full bg-transparent text-sm sm:text-xl placeholder:text-gray-400"
                placeholder="Search Jobs, Employers, Candidates..."
              />
            </div>
            <button className="px-4 h-full text-sm sm:text-base rounded-md bg-black text-white">
              Search
            </button>
          </form>
        </div>
        <div className="flex-1 h-full w-full flex items-center justify-center">
          <img src="/assets/hero-img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Header;
