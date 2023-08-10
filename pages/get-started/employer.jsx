import React, { useEffect, useState } from "react";
import { useUserAuth } from "@/context/UserAuth";
import { useRouter } from "next/router";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { user } = useUserAuth();

  useEffect(() => {
    if (user) {
      useRouter().push("/profile");
    }
  }, []);

  useEffect(() => {
    if (!name || !email || !address || !phone || !isChecked) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [name, email, address, phone, isChecked]);

  return (
    <main className="flex w-full min-h-screen h-screen">
      <div className="flex-1 w-full h-full bg-primary flex items-center justify-center px-3 py-5">
        <div className="w-full max-w-md p-5 bg-white  flex flex-col">
          <h2 className="text-2xl font-bold text-black mb-2">
            Create your Employer Account
          </h2>
          <span className="text-base font-medium text-black mb-5">
            Please provide the legal information of the company below
          </span>
          <form action="" className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm text-black">
                Legal Name <span className="text-red-900 font-semibold">*</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="text-sm w-full h-10 bg-gray-200 px-3"
                name=""
                id=""
                placeholder="Enter your company name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm text-black">
                Email Address{" "}
                <span className="text-red-900 font-semibold">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="text-sm w-full h-10 bg-gray-200 px-3"
                name=""
                id=""
                placeholder="Enter your company email address"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm text-black">
                Full Address{" "}
                <span className="text-red-900 font-semibold">*</span>
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="text-sm w-full h-10 bg-gray-200 px-3"
                name=""
                id=""
                placeholder="Enter your company full address"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-sm text-black">
                Phone Number{" "}
                <span className="text-red-900 font-semibold">*</span>
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                className="text-sm w-full h-10 bg-gray-200 px-3"
                name=""
                id=""
                placeholder="Enter your company phone number"
              />
            </div>
            <div className="">
              <input
                onChange={(e) => setIsChecked(e.target.checked)}
                type="checkbox"
                name=""
                id=""
                className="w-[15px] accent-black aspect-square"
              />
              <span className="text-sm text-black ml-1">
                I agree that I provided the real information about the company{" "}
                <span className="text-red-900 font-semibold">*</span>
              </span>
            </div>
            <button
              disabled={isDisabled}
              className="w-full py-3 rounded-md text-white font-medium bg-black text-base transition duration-200 gap-2 group disabled:opacity-60"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="flex-1 w-full h-full border-1 border-solid border-black border-t-0 border-r-0 border-b-0 hidden md:flex items-center justify-center">
        <img src="/assets/hero-img.png" className="w-[90%]" alt="" />
      </div>
    </main>
  );
};

export default register;
