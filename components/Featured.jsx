import React from "react";
import Link from "next/link";
import { SlLocationPin, SlCalender } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { featuredJobs } from "@/data";
import { BsArrowRight, BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineNotificationImportant } from "react-icons/md";
import JobCard from "@/common/JobCard";

const Featured = () => {
  return (
    <div className="px-3 mb-12 sm:mb-28 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-1 mb-10 text-center">
        <h2 className="text-3xl font-bold text-black">Featured Jobs</h2>
        <span className="text-gray-500 text-lg font-medium">
          Find the job that’s perfect for you. About 800+ new jobs everyday
        </span>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
        {featuredJobs.map((job, i) => (
          <JobCard job={job} key={i} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-12">
        <Link
          href="/find-jobs"
          className="px-5 py-3 rounded-md text-secondary font-medium bg-transparent text-base border-solid border-[1px] border-secondary transition duration-200 hover:text-white hover:bg-secondary flex items-center gap-2 group"
        >
          See More Jobs
          <BsArrowRight className="text-lg group-hover:translate-x-1 transtion duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default Featured;
