import React from "react";
import Link from "next/link";
import { SlLocationPin, SlCalender } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { featuredJobs } from "@/data";
import { BsArrowRight, BsFillLightningChargeFill } from "react-icons/bs";
import { MdOutlineNotificationImportant } from "react-icons/md";

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
          <div className="p-5 border-[1px] border-gray-200 border-solid transition duration-200 hover:border-secondary hover:shadow-xl relative">
            <div className="absolute top-5 right-5 flex flex-row gap-3">
              {job?.urgent && (
                <div
                  title="Urgent"
                  className="w-8 aspect-square bg-red-50 rounded-full flex items-center justify-center"
                >
                  <MdOutlineNotificationImportant className="text-lg text-warning" />
                </div>
              )}
              <div
                title="Featured Job"
                className="w-8 aspect-square bg-gray-100 rounded-full flex items-center justify-center"
              >
                <BsFillLightningChargeFill className="text-lg text-secondary" />
              </div>
            </div>
            <div className="flex flex-col pb-4 border-b-[1px] border-gray-200 border-solid border-r-0 border-l-0 border-t-0">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-5">
                  <Link href="#" className="sm:w-16 w-12 h-12 sm:h-16">
                    <img
                      src={job?.photo}
                      className="w-full h-full object-cover object-center"
                      alt="Deloitte"
                    />
                  </Link>
                  <div className="flex flex-col gap-1">
                    <Link
                      className="w-[fit-content] text-sm font-semibold text-secondary transition duration-200 hover:underline underline-offset-2"
                      href={`/category/${job?.category?.slug}`}
                    >
                      {job?.category?.title}
                    </Link>
                    <Link
                      href={`/jobs/${job?.jobId}`}
                      className="w-[fit-content] text-lg sm:text-2xl font-semibold transition duration hover:text-secondary"
                    >
                      {job?.name}
                    </Link>
                    <div className="flex flex-row gap-5 items-center">
                      <div className="flex items-center text-gray-600">
                        <SlLocationPin className="text-sm sm:text-lg" />
                        <span className="ml-1">{job?.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <SlCalender className="text-sm sm:text-lg" />
                        <span className="ml-1">{job?.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  {job?.jobType && (
                    <Link
                      href={`/job-type/` + job?.jobType?.slug}
                      className="text-xs bg-gray-200 text-black rounded-full px-3 py-1 transition duration-200 hover:bg-secondary hover:text-white"
                    >
                      {job?.jobType?.name}
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                <AiOutlineDollar className="text-2xl" />
                <span className="text-base sm:text-lg text-black font-semibold">
                  Rs {job?.salary}
                </span>
                <span className="text-gray-700 text-sm sm:text-base">
                  / month
                </span>
              </div>
              <span className="text-sm sm:text-base text-gray-700">
                {job?.deadline}
              </span>
            </div>
          </div>
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
