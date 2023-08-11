import JobCard from "@/common/JobCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { allJobs } from "@/data";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FindJobs = () => {
  const [jobsPerPage, setJobsPerPage] = useState(allJobs.length);
  const [jobs, setJobs] = useState(allJobs);
  const [jobType, setJobType] = useState("all-types");

  const filterByJobType = (item) => {
    return item.jobType.slug === jobType;
  };

  useEffect(() => {
    if (jobType === "all-types") {
      setJobs(allJobs);
    } else {
      setJobs(allJobs.filter(filterByJobType));
    }
  }, [jobType, jobs]);

  return (
    <main className="w-full min-h-screen h-screen selection:text-white selection:bg-black px-3">
      <Navbar />
      <div className="max-w-7xl mx-auto w-full flex flex-col py-12">
        <form className="w-full border-solid border-[2px] border-black flex flex-col md:flex-row mb-10">
          <input
            type="text"
            className="w-full h-0 py-3 sm:py-0 sm:h-14 text-lg placeholder:text-gray-300 flex-1 px-3"
            placeholder="Search for jobs"
          />
          <select
            name=""
            id=""
            className="px-4 text-black border-black border-solid border-[2px] border-y-[2px] md:border-y-0 border-x-0 sm:border-x-[2px] border-r-0 h-12 sm:h-14"
            placeholder="All Categories"
          >
            <option value="">Select Category</option>
            <option value="">Accounting</option>
            <option value="">Engineering</option>
          </select>
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            name=""
            id=""
            className="px-4 text-black border-black border-solid border-[2px] border-y-[2px] md:border-y-0 border-x-0 sm:border-b-[2px] border-t-0 h-12 sm:h-14"
            placeholder="All Categories"
          >
            <option value="all-types">Select Type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="internship">Intership</option>
          </select>
          <button className="px-3 h-14 bg-black text-white">Find Jobs</button>
        </form>
        <div className="w-full flex flex-col">
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full flex-1 justify-between mb-10">
            <span className="text-lg font-light text-black">
              Showing 1 – {jobsPerPage} of {allJobs.length} results
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <select
                name=""
                id=""
                className="p-3 w-full sm:w-[fit-content] bg-gray-100 border-[1px] border-solid border-transparent focus:border-secondary focus:bg-transparent accent-[none]"
              >
                <option value="">Sort By (Default)</option>
                <option value="">Newest</option>
                <option value="">Oldest</option>
                <option value="">Salary: Low - High</option>
                <option value="">Salary: High - Low</option>
              </select>
              <select
                onChange={(e) => setJobsPerPage(e.target.value)}
                name=""
                id=""
                className="p-3 bg-gray-100 w-full sm:w-[fit-content] border-[1px] border-solid border-transparent focus:border-secondary focus:bg-transparent"
              >
                <option value={jobs.length}>Job Per Page</option>
                <option value="1">1 Per Page</option>
                <option value="2">2 Per Page</option>
                <option value="3">3 Per Page</option>
                <option value="4">4 Per Page</option>
              </select>
            </div>
          </div>
          {jobs.length > 0 ? (
            <div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-5">
              {jobs.slice(0, jobsPerPage).map((job, i) => (
                <JobCard job={job} key={i} />
              ))}
            </div>
          ) : (
            <div className="w-full py-10 flex items-center justify-center">
              <span className="text-2xl font-semibold text-gray-300 text-center">
                No job available!
              </span>
            </div>
          )}
        </div>
        <div className="w-full flex items-center justify-center gap-4 mt-12">
          {/* <div className="text-lg font-semibold w-10 h-10 flex items-center justify-center bg-black text-white transition duration-200 hover:bg-secondary cursor-pointer">
            <IoIosArrowBack className="text-xl" />
          </div> */}
          <div className="text-lg font-semibold w-10 h-10 flex items-center justify-center bg-black text-white transition duration-200 hover:bg-secondary cursor-pointer">
            1
          </div>
          <div className="text-lg font-semibold w-10 h-10 flex items-center justify-center bg-black text-white transition duration-200 hover:bg-secondary cursor-pointer">
            2
          </div>
          <div className="text-lg font-semibold w-10 h-10 flex items-center justify-center bg-black text-white transition duration-200 hover:bg-secondary cursor-pointer">
            <IoIosArrowForward className="text-xl" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FindJobs;
