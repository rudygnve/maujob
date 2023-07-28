import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Reviews = () => {
  return (
    <div className="px-3 w-full mb-16 bg-primary py-10 sm:py-20">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <div className="text-center w-full flex flex-col mb-16">
          <h2 className="text-black text-3xl md:text-4xl xl:text-5xl font-bold mb-4">
            What People Says About MauJob?
          </h2>
          <p className="text-lg font-semibold text-black">
            Discover reviews left by some candidates and employers
          </p>
        </div>
        <div className="flex flex-wrap gap-5 place-content-center">
          <div className="flex flex-col p-5 bg-white max-w-sm item border-black border-[4px] border-solid transition duration-200 hover:scale-[1.02]">
            <div className="flex flex-row gap-4">
              <Link className="w-20 h-20 overflow-hidden" href="">
                <img
                  src="/assets/deloitte.png"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </Link>
              <div className="flex flex-col">
                <Link href="" className="text-base text-black font-semibold">
                  Deloitte
                </Link>
                <Link href="" className="text-sm text-secondary">
                  Accounting
                </Link>
                <div className="flex flex-row gap-1 mt-2">
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-black italic">
                ❝ If a new tool comes out and it saves you time and costs less
                than the equivalent value, it’s usually an insta buy.
                @bannerbearHQ likely falls into this category for many. ❞
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5 bg-white max-w-sm item border-black border-[4px] border-solid transition duration-200 hover:scale-[1.02]">
            <div className="flex flex-row gap-4">
              <Link className="w-20 h-20 overflow-hidden" href="">
                <img
                  src="/assets/gc.jpg"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </Link>
              <div className="flex flex-col">
                <Link href="" className="text-base text-black font-semibold">
                  Deloitte
                </Link>
                <Link href="" className="text-sm text-secondary">
                  Accounting
                </Link>
                <div className="flex flex-row gap-1 mt-2">
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-black italic">
                ❝ If a new tool comes out and it saves you time and costs less
                than the equivalent value, it’s usually an insta buy.
                @bannerbearHQ likely falls into this category for many. If a new
                tool comes out and it saves you time and costs less than the
                equivalent value, it’s usually an insta buy. @bannerbearHQ
                likely falls into this category for many. ❞
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5 bg-white max-w-sm item border-black border-[4px] border-solid transition duration-200 hover:scale-[1.02]">
            <div className="flex flex-row gap-4">
              <Link className="w-20 h-20 overflow-hidden" href="">
                <img
                  src="/assets/islandhaze.png"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </Link>
              <div className="flex flex-col">
                <Link href="" className="text-base text-black font-semibold">
                  Deloitte
                </Link>
                <Link href="" className="text-sm text-secondary">
                  Accounting
                </Link>
                <div className="flex flex-row gap-1 mt-2">
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-black italic">
                ❝ If a new tool comes out and it saves you time and costs less
                than the equivalent value, it’s usually an insta buy.
                @bannerbearHQ likely falls into this category for many. If a new
                tool comes out and it saves you time and costs less than the
                equivalent value, it’s usually an insta buy. ❞
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5 bg-white max-w-sm item border-black border-[4px] border-solid transition duration-200 hover:scale-[1.02]">
            <div className="flex flex-row gap-4">
              <Link className="w-20 h-20 overflow-hidden" href="">
                <img
                  src="/assets/deloitte.png"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </Link>
              <div className="flex flex-col">
                <Link href="" className="text-base text-black font-semibold">
                  Deloitte
                </Link>
                <Link href="" className="text-sm text-secondary">
                  Accounting
                </Link>
                <div className="flex flex-row gap-1 mt-2">
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-black italic">
                ❝ If a new tool comes out and it saves you time and costs less
                than the equivalent value, it’s usually an insta buy.
                @bannerbearHQ likely falls into this category for many. ❞
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5 bg-white max-w-sm item border-black border-[4px] border-solid transition duration-200 hover:scale-[1.02]">
            <div className="flex flex-row gap-4">
              <Link className="w-20 h-20 overflow-hidden" href="">
                <img
                  src="/assets/deloitte.png"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </Link>
              <div className="flex flex-col">
                <Link href="" className="text-base text-black font-semibold">
                  Deloitte
                </Link>
                <Link href="" className="text-sm text-secondary">
                  Accounting
                </Link>
                <div className="flex flex-row gap-1 mt-2">
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-black italic">
                ❝ If a new tool comes out and it saves you time and costs less
                than the equivalent value, it’s usually an insta buy.
                @bannerbearHQ likely falls into this category for many. If a new
                tool comes out and it saves you time and costs less than the
                equivalent value, it’s usually an insta buy. @bannerbearHQ
                likely falls into this category for many. ❞
              </p>
            </div>
          </div>
          <div className="flex flex-col p-5 bg-white max-w-sm item border-black border-[4px] border-solid transition duration-200 hover:scale-[1.02]">
            <div className="flex flex-row gap-4">
              <Link className="w-20 h-20 overflow-hidden" href="">
                <img
                  src="/assets/gc.jpg"
                  className="w-full h-full object-cover object-center"
                  alt=""
                />
              </Link>
              <div className="flex flex-col">
                <Link href="" className="text-base text-black font-semibold">
                  General Construction
                </Link>
                <Link href="" className="text-sm text-secondary">
                  Project Manager
                </Link>
                <div className="flex flex-row gap-1 mt-2">
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                  <AiFillStar className="text-xl text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-base text-black italic">
                ❝ If a new tool comes out and it saves you time and costs less
                than the equivalent value, it’s usually an insta buy.
                @bannerbearHQ likely falls into this category for many. ❞
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-16">
          <Link
            href="/reviews"
            className="px-5 py-3 rounded-md text-white font-medium bg-black text-base transition duration-200 flex items-center gap-2 group"
          >
            See More Reviews
            <BsArrowRight className="text-lg group-hover:translate-x-1 transtion duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
