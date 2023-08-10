import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "@/context/UserAuth";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";

const candidate = () => {
  const { googleSignIn, signUp, user } = useUserAuth();
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled1, setIsDisabled1] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  useEffect(() => {
    if (user) {
      router.push("/profile");
    }
  }, []);

  useEffect(() => {
    if (!email || !password || !cpassword) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [email, password, cpassword]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);
    try {
      if (password === cpassword) {
        if (password.length >= 8) {
          await signUp(email, password);
          toast.success("Sign Up Successfully!");
          setIsDisabled(false);
          setIsLoading(false);
        } else {
          toast.error("Password too short!");
          setIsDisabled(false);
          setIsLoading(false);
        }
      } else {
        toast.error("Password doesn't match!");
        setIsDisabled(false);
        setIsLoading(false);
      }
    } catch (error) {
      if (error?.message === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use!");
      }
      setIsDisabled(false);
      setIsLoading(false);
    } finally {
      setIsDisabled(false);
      setIsLoading(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    setIsDisabled1(true);
    try {
      await googleSignIn();
      toast.success("Sign in Successfully!");
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      toast.error("Something Went Wrong!");
      setIsDisabled1(false);
    } finally {
      setIsDisabled1(false);
    }
  };

  return (
    <main className="flex w-full min-h-screen h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex-1 w-full h-full bg-primary flex items-center justify-center px-3 py-5">
        <div className="p-8 border-[3px] border-solid border-black bg-white max-w-xl w-full">
          <h1 className="text-3xl font-semibold text-black mb-2">
            Create a new Candidate Account
          </h1>
          <span className="text-black">
            Provide the required information to continue
          </span>
          <form
            action=""
            onSubmit={handleSignUp}
            className="flex flex-col gap-4 mt-8 mb-4"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter your email address *"
              className="w-full border-[2px] border-solid border-black h-12 px-3 placeholder:text-gray-500"
              name=""
              id=""
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password * - At Least 8 Characters"
              required
              className="w-full border-[2px] border-solid border-black h-12 px-3 placeholder:text-gray-500"
              name=""
              id=""
            />
            <input
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              type="password"
              placeholder="Re-Enter your password * -  At Least 8 Characters"
              required
              className="w-full border-[2px] border-solid border-black h-12 px-3 placeholder:text-gray-500"
              name=""
              id=""
            />
            <button
              disabled={isDisabled}
              className="w-full h-12 flex items-center justify-center bg-black text-white disabled:opacity-60 active:disabled:scale-100 hover:disabled:bg-black hover:disabled:text-white"
            >
              {isLoading ? (
                <img src="/assets/loading.png" className="w-10 animate-spin" />
              ) : (
                "Create account"
              )}
            </button>
          </form>
          <div className="flex flex-row items-center gap-2 mb-4">
            <span className="h-[2px] w-full bg-gray-300" />
            <span className="text-gray-400 uppercase text-base font-sembold">
              or
            </span>
            <span className="h-[2px] w-full bg-gray-300" />
          </div>
          <button
            disabled={isDisabled1}
            onClick={handleSignInWithGoogle}
            className="flex items-center gap-2 w-full justify-center h-12 bg-transparent text-black font-semibold transistion-all duration-200 active:scale-95 border-[2px] border-solid border-black disabled:opacity-80 active:disabled:scale-100 hover:disabled:bg-black hover:disabled:text-white mb-5"
          >
            <FcGoogle className="text-2xl" />
            Sign In With Google
          </button>
          <div className="flex items-center justify-center">
            <span className="text-black place-self-center text-center">
              Already got an account?{" "}
              <Link
                href="/login"
                className="font-semibold underline underline-offset-2"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full h-full border-1 border-solid border-black border-t-0 border-r-0 border-b-0 hidden md:flex items-center justify-center">
        <img src="/assets/hero-img.png" className="w-[90%]" alt="" />
      </div>
    </main>
  );
};

export default candidate;
