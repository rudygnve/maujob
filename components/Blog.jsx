import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { posts } from "@/data";

const Blog = () => {
  return (
    <div className="px-3 mb-12 sm:mb-28 w-full max-w-7xl mx-auto">
      <div className="w-full flex flex-row items-center justify-between mb-10">
        <h2 className="text-4xl font-bold text-black">Blog</h2>
        <Link
          href="/blog"
          className="text-black text-base font-semibold flex items-center gap-2 group"
        >
          All Posts
          <FaArrowRightLong className="group-hover:translate-x-1 transition duration-200" />
        </Link>
      </div>
      <div className="w-full grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {posts.map((post, i) => (
          <div key={i} className="w-full flex flex-col group">
            <Link
              href={`/blog/` + post?.slug}
              className="w-full overflow-hidden"
            >
              <img
                src={post?.featuredImg}
                className="w-full h-full transition duration-200 group-hover:scale-110"
                alt=""
              />
            </Link>
            <div className="w-full flex flex-col p-5 border-solid border-gray-200 border-[2px] border-t-0 transition duration-200 group-hover:shadow-xl">
              <div className="flex flex-row gap-3 mb-5">
                <Link
                  href="#"
                  className="text-xs bg-gray-200 text-black rounded-full px-3 py-1 transition duration-200 hover:bg-secondary hover:text-white"
                >
                  {post?.category}
                </Link>
              </div>
              <div className="flex flex-col">
                <Link
                  href={"/blog/" + post?.slug}
                  className="capitalize text-black text-2xl font-semibold transition duration-200 hover:text-secondary mb-5"
                >
                  {post?.title}
                </Link>
                <div className="flex flex-row items-center justify-between">
                  <Link href="">
                    by{" "}
                    <span className="text-secondary font-semibold">
                      {post?.createdBy}
                    </span>
                  </Link>
                  <span className="text-gray-700 font-medium">
                    {post?.createdAt}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
