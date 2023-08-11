import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useUserAuth } from "@/context/UserAuth";
import toast, { Toaster } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { FiHeart, FiSettings, FiLogOut } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { user } = useUserAuth();
  const [show, setShow] = useState(false);
  const { logOut } = useUserAuth();
  const [showMenu, setShowMenu] = useState(false);

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Log out Successfully!");
    } catch (err) {
      toast.error("Something Went Wrong!");
    }
  };

  const navLinks = [
    {
      title: "Find Jobs",
      slug: "/find-jobs",
    },
    {
      title: "Employers",
      slug: "/employers",
    },
    {
      title: "Candidates",
      slug: "/candidates",
    },
    {
      title: "Blog",
      slug: "/blog",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-3 sm:py-5">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Link href={user ? "/find-jobs" : "/"}>
            <img src="/assets/logo.png" className="sm:w-40 w-32" alt="" />
          </Link>
          <ul
            className={`xl:ml-[70px] ml-0 flex flex-col items-center xl:items-start justify-center xl:justify-start xl:flex-row gap-10 text-lg xl:text-black font-semibold transition-all duration-200 fixed xl:static left-0 ${
              showMenu ? "top-0" : "top-[-120%]"
            } right-0 h-full w-full bg-black xl:bg-transparent text-white`}
          >
            <div className="w-full top-0 left-0 right-0 xl:hidden absolute px-3 py-3 sm:py-5 flex items-center justify-between">
              <Link
                onClick={() => setShowMenu(false)}
                href={user ? "/find-jobs" : "/"}
              >
                <img src="/assets/logo_white.png" className="w-32" alt="Logo" />
              </Link>
              <div
                onClick={() => setShowMenu(false)}
                className="w-8 sm:w-10 h-8 sm:h-10 rounded-md bg-white text-black flex items-center justify-center cursor-pointer"
              >
                <RxCross1 className="text-xl sm:text-2xl" />
              </div>
            </div>
            {navLinks.map((item, i) => (
              <li>
                <Link href={item?.slug} onClick={() => setShowMenu(false)}>
                  {item?.title}
                </Link>
              </li>
            ))}
            {!user && (
              <li className="">
                <Link
                  onClick={() => setShowMenu(false)}
                  href="/login"
                  className="px-4 py-3 text-black font-semibold text-lg flex w-[fit-content] xl:hidden bg-secondary rounded-md"
                >
                  Login
                </Link>
              </li>
            )}
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
              className="text-lg xl:flex hidden text-black font-semibold"
              href="/login"
            >
              Login
            </Link>
            <Link
              className="text-lg xl:flex hidden text-black font-semibold"
              href="/get-started"
            >
              Register
            </Link>
            <div
              onClick={() => setShowMenu(true)}
              className="w-8 sm:w-10 h-8 sm:h-10 rounded-md bg-black text-white flex xl:hidden items-center justify-center cursor-pointer"
            >
              <HiMenuAlt3 className="text-xl sm:text-2xl" />
            </div>
            <Link
              href="post-job"
              className="px-4 py-3 text-white font-semibold sm:text-lg text-sm xl:flex hidden bg-black rounded-md"
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
