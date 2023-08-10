import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";
import { categories } from "@/data";

const Categories = () => {
  return (
    <div className="px-3 py-12 sm:py-28 w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-row items-center justify-between mb-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-3xl font-bold text-black">
            Browse by category
          </h2>
          <p className="text-xl font-light text-gray-700 hidden md:flex">
            Recruitment Made Easy
          </p>
        </div>
        <Link
          href="/category"
          className="text-black text-base font-semibold items-center gap-2 group hidden sm:flex"
        >
          All Categories
          <FaArrowRightLong className="group-hover:translate-x-1 transition duration-200" />
        </Link>
      </div>
      <div className="grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {categories.map((category, i) => (
          <Link
            key={i}
            href={`/category/${category?.slug}`}
            className="flex bg-gray-200 transition duration-200 hover:bg-slate-700 group hover:text-white rounded-md w-full h-36 pl-8 items-center group"
          >
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{category?.name}</h3>
              <span className="group-hover:text-white text-sm transition duration-200 text-gray-800 font-medium mb-3">
                {category?.num_of_jobs}{" "}
                {category?.num_of_jobs > 1 ? "Jobs" : "Job"} Available
              </span>
              <span className="flex items-center gap-2">
                Explore All
                <BsArrowRight className="text-lg" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
