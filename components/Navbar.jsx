import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useUserAuth } from "@/context/UserAuth";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user } = useUserAuth();
  const [show, setShow] = useState(false);
  const { logOut } = useUserAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Log out Successfully!");
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
  };

  const handleShowMenu = () => {
    setShow(!show);
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <Toaster position="top-center" reverseOrder={false} />
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
        {user ? (
          <div onClick={handleShowMenu} className="w-10 h-10 relative">
            <img
              src={user?.photoURL}
              className="w-full object-cover object-center rounded-full"
              alt=""
            />
            {show && (
              <div className="absolute w-[200px] translate-y-[80%] top-0 right-0 p-3 bg-white rounded-lg">
                <button
                  onClick={handleLogOut}
                  className="w-full h-12 bg-black text-white rounded-md"
                >
                  Log out
                </button>
                <div className="absolute w-3 h-3 rotate-45 translate-y-[-50%] top-0 bg-white right-3"></div>
              </div>
            )}
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
