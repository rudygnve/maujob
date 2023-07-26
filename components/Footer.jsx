import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { BsSend } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="px-3 pt-8 pb-6 w-full border-[1px] border-solid border-gray-300 border-l-0 border-r-0 border-b-0">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center pb-8">
          <Link href="/">
            <img src="/assets/logo.png" className="w-40 sm:mb-0 mb-10" alt="" />
          </Link>
          <div className="flex flex-row items-center gap-3">
            <span className="text-sm text-black font-bold">Follow Us:</span>
            <Link
              target="_blank"
              className="w-8 aspect-square text-black bg-gray-200 flex items-center justify-center rounded-full transition duration-200 hover:text-white hover:bg-secondary"
              href="#"
            >
              <FaFacebookF className="text-sm" />
            </Link>
            <Link
              target="_blank"
              className="w-8 aspect-square text-black bg-gray-200 flex items-center justify-center rounded-full transition duration-200 hover:text-white hover:bg-secondary"
              href="#"
            >
              <FaInstagram className="text-sm" />
            </Link>
            <Link
              target="_blank"
              className="w-8 aspect-square text-black bg-gray-200 flex items-center justify-center rounded-full transition duration-200 hover:text-white hover:bg-secondary"
              href="#"
            >
              <FaTwitter className="text-sm" />
            </Link>
            <Link
              target="_blank"
              className="w-8 aspect-square text-black bg-gray-200 flex items-center justify-center rounded-full transition duration-200 hover:text-white hover:bg-secondary"
              href="#"
            >
              <FaLinkedin className="text-sm" />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between py-8 w-full border-gray-300 border-[1px] border-solid border-r-0 border-l-0 gap-8">
          <div className="flex flex-col">
            <h3 className="text-black text-xl font-semibold mb-2">
              Subscribe To Us
            </h3>
            <span className="text-sm text-black font-medium mb-4">
              Get job alerts to be the first to apply
            </span>
            <form
              action=""
              className="flex flex-row w-full h-10 overflow-hidden"
            >
              <input
                type="text"
                placeholder="Your Best Email Address"
                className="flex-1 border-[1px] border-solid border-gray-200 border-r-0 text-sm px-2 transition duration-200 focus:border-[2px] focus:border-gray-300 focus:border-r-0"
              />
              <button className="h-full px-5 bg-secondary">
                <BsSend className="text-base text-white" />
              </button>
            </form>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-black mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Post A Job
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Build Your CV
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-black mb-4">
              Job Category
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Delivery Driver
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Human Resource
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Sales & Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-black mb-4">
              Job Category
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Accounting
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Delivery Driver
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Engineering
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  Sales & Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold text-black mb-4">
              Download our App
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  <img
                    src="/assets/google-play.png"
                    className="w-full max-w-[150px]"
                    alt=""
                  />
                </Link>
              </li>
              <li>
                <Link href="" className="text-gray-700 text-sm">
                  <img
                    src="/assets/app-store.png"
                    className="w-full max-w-[150px]"
                    alt=""
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:text-start text-center gap-6 sm:flex-row items-center justify-between">
          <span className="text-sm text-gray-700">
            © {new Date().getFullYear()} MauJob | Created by{" "}
            <Link className="text-secondary font-semibold" href="">
              Rudy Genave
            </Link>
          </span>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link href="" className="text-gray-700 text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href="" className="text-gray-700 text-sm">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="" className="text-gray-700 text-sm">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="" className="text-gray-700 text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="" className="text-gray-700 text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
