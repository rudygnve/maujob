import Link from "next/link";
import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Link href="/">
            <img src="/assets/logo.png" className="sm:w-40 w-32" alt="" />
          </Link>
          <ul className="ml-[70px] hidden md:hidden xl:flex flex-row gap-10 text-lg text-black font-semibold transition duration-200">
            <li>
              <Link href="/find-jobs">Find Jobs</Link>
            </li>
            <li>
              <Link href="/find-jobs">Employers</Link>
            </li>
            <li>
              <Link href="/find-jobs">Candidates</Link>
            </li>
            <li>
              <Link href="/find-jobs">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center gap-10">
          <Link
            className="text-lg sm:flex hidden text-black font-semibold"
            href="/login"
          >
            Login
          </Link>
          <Link
            className="text-lg sm:flex hidden text-black font-semibold"
            href="/get-started"
          >
            Register
          </Link>
          <div className="w-10 aspect-square rounded-md bg-black text-white flex md:hidden items-center justify-center cursor-pointer">
            <HiMenuAlt3 className="text-2xl" />
          </div>
          <Link
            href="post-job"
            className="px-4 py-3 text-white font-semibold sm:text-lg text-sm sm:flex hidden bg-black rounded-md"
          >
            Post a job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
