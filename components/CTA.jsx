import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const CTA = () => {
  return (
    <div className="px-3 pb-16 w-full max-w-7xl mx-auto flex sm:flex-row flex-col items-center gap-10">
      <div className="flex-1 flex flex-col order-1 sm:text-start text-center">
        <h1 className="sm:text-5xl text-3xl font-bold text-black mb-3">
          Searching For A Job?
        </h1>
        <p className="text-sm text-black mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sint
          optio qui commodi tenetur repudiandae voluptatibus perferendis
        </p>
        <Link
          href="/find-jobs"
          className="w-[fit-content] sm:self-start self-center px-5 py-3 rounded-md text-white font-medium bg-black text-base transition duration-200 flex items-center gap-2 group"
        >
          Get A Job
          <BsArrowRight className="text-lg group-hover:translate-x-1 transtion duration-200" />
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <img className="w-[70%]" src="/assets/hero-img.png" alt="" />
      </div>
    </div>
  );
};

export default CTA;
