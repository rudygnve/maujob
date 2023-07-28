import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "@/context/UserAuth";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

const candidate = () => {
  const { googleSignIn } = useUserAuth();
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

  const handleSignInWithGoogle = async () => {
    setIsDisabled(true);
    try {
      await googleSignIn();
      toast.success("Sign in Successfully!");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      toast.error("Something Went Wrong!");
      setIsDisabled(false);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <main className="flex w-full min-h-screen h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex-1 w-full h-full bg-primary flex items-center justify-center px-3 py-5">
        <div className="flex flex-col gap-3">
          <button
            disabled={isDisabled}
            onClick={handleSignInWithGoogle}
            className="flex items-center gap-2 px-5 py-3 bg-black text-white font-semibold transistion-all duration-200 active:scale-95 border-[2px] border-solid border-black hover:bg-transparent hover:text-black disabled:opacity-80 active:disabled:scale-100 hover:disabled:bg-black hover:disabled:text-white"
          >
            <FcGoogle className="text-2xl" />
            Sign In With Google
          </button>
        </div>
      </div>
      <div className="flex-1 w-full h-full border-1 border-solid border-black border-t-0 border-r-0 border-b-0 hidden md:flex items-center justify-center">
        <img src="/assets/hero-img.png" className="w-[90%]" alt="" />
      </div>
    </main>
  );
};

export default candidate;
