import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useUserAuth } from "@/context/UserAuth";
import toast, { Toaster } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { FiHeart, FiSettings, FiLogOut } from "react-icons/fi";

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

  return (
    <div className="w-full max-w-7xl mx-auto py-5">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Link href={user ? "/find-jobs" : "/"}>
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
          <div onClick={() => setShow(!show)} className="w-12 h-12 relative">
            <img
              src={user?.photoURL}
              className="w-full h-full object-cover object-center rounded-full cursor-pointer"
              alt=""
            />
            {show && (
              <div className="absolute overflow-hidden flex flex-col w-[300px] h-auto translate-y-[100%] shadow-xl bottom-[-15px] right-0 bg-white">
                <div className="flex gap-3 p-4 items-center border-[1px] border-x-0 border-t-0 border-solid border-gray-200">
                  {user.photoURL ? (
                    <img
                      src={user?.photoURL}
                      className="w-12 h-12 object-cover object-center rounded-full cursor-pointer"
                      alt=""
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src="/assets/user.png"
                        alt="user"
                        className="w-full object-cover object-center"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap">
                    <h4 className="text-lg font-semibold text-black">
                      {user?.displayName}
                    </h4>
                    <span className="text-secondary font-medium text-sm">
                      {user?.email}
                    </span>
                  </div>
                </div>
                <ul className="flex flex-col">
                  <li className="h-12 w-full">
                    <Link
                      href="/profile"
                      className="w-full flex items-center gap-2 h-full px-3 text-black font-medium hover:bg-gray-200"
                    >
                      <FaRegUser className="text-lg" />
                      Profile
                    </Link>
                  </li>
                  <li className="h-12 w-full">
                    <Link
                      href="/profile"
                      className="w-full flex items-center gap-2 h-full px-3 text-black font-medium hover:bg-gray-200"
                    >
                      <FiHeart className="text-lg" />
                      Saved Jobs
                    </Link>
                  </li>
                  <li className="h-12 w-full border-[1px] border-x-0 border-t-0 border-solid border-gray-200">
                    <Link
                      href="/profile"
                      className="w-full flex items-center gap-2 h-full px-3 text-black font-medium hover:bg-gray-200"
                    >
                      <FaRegUser className="text-lg" />
                      Profile
                    </Link>
                  </li>
                </ul>
                <ul className="flex flex-col">
                  <li className="h-12 w-full">
                    <Link
                      href="/profile"
                      className="w-full flex items-center gap-2 h-full px-3 text-black font-medium hover:bg-gray-200"
                    >
                      <FiSettings className="text-lg" />
                      Settings
                    </Link>
                  </li>
                  <li className="p-3">
                    <button
                      onClick={handleLogOut}
                      className="h-12 w-full bg-black text-white flex items-center justify-center gap-2"
                    >
                      Logout
                      <FiLogOut className="text-lg" />
                    </button>
                  </li>
                </ul>
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
