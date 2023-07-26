import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/router";

const index = () => {
  const [isEmployer, setIsEmployer] = useState(false);
  const [isCandidate, setIsCandidate] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const employerSelected = () => {
    setIsCandidate(false);
    setIsEmployer(true);
  };

  const candidateSelected = () => {
    setIsEmployer(false);
    setIsCandidate(true);
  };

  useEffect(() => {
    if (!isCandidate && !isEmployer) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [isCandidate, isEmployer]);

  const router = useRouter();

  const handleNextStep = () => {
    router.push("/get-started/register");
  };

  return (
    <div className="flex flex-col text-center items-center justify-center w-full px-3 h-screen">
      <h2 className="text-3xl font-semibold text-black mb-8">
        What is your objective on MauJob?
      </h2>
      <div className="flex sm:flex-row flex-col gap-5 w-full items-center justify-center mb-8">
        <div
          onClick={employerSelected}
          className={`border-[2px] border-solid ${
            isEmployer ? "border-secondary" : "border-gray-200"
          } py-6 w-full max-w-[250px] cursor-pointer hover:border-secondary transition duration-200`}
        >
          <span>I want to hire someone</span>
        </div>
        <div
          onClick={candidateSelected}
          className={`border-[2px] border-solid ${
            isCandidate ? "border-secondary" : "border-gray-200"
          } py-6 w-full max-w-[250px] cursor-pointer hover:border-secondary transition duration-200`}
        >
          <span>I want to find a job</span>
        </div>
      </div>
      <button
        onClick={handleNextStep}
        disabled={isDisabled}
        className="px-5 py-3 rounded-md text-white font-medium bg-black text-base transition duration-200 flex items-center gap-2 group disabled:opacity-60"
      >
        Continue
        <BsArrowRight className="text-lg group-hover:translate-x-1 transtion duration-200" />
      </button>
    </div>
  );
};

export default index;
