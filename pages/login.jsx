import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "@/context/UserAuth";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const candidate = () => {
  const { googleSignIn, resetPassword, logIn, user } = useUserAuth();
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("rudygenave0911@gmail.com");
  const [password, setPassword] = useState("GNve0911#");
  const [disabledBtn, setDisabledBtn] = useState(true);

  useEffect(() => {
    if (user) {
      router.push("/profile");
    }
  }, []);

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

  const handleForgotPassword = async () => {
    setIsLoading(true);
    try {
      await resetPassword(resetEmail);
      setIsLoading(false);
      setEmailSent(true);
    } catch (error) {
      toast.error(error?.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!email || !password || password.length < 8) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [email, password]);

  const handleLogIn = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setDisabledBtn(true);
    try {
      await logIn(email, password);
      toast.success("Login Successfully!");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error.message);
      setDisabledBtn(false);
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        toast.error("Wrong Password!");
      }
    } finally {
      setIsSubmitting(false);
      setDisabledBtn(false);
    }
  };

  return (
    <main className="flex w-full min-h-screen h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      {showForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] p-3 z-50">
          <div className="relative p-5 bg-white w-full max-w-xl border-black border-[3px] border-solid flex flex-col">
            <RxCross2
              onClick={() => setShowForgotPassword(false)}
              className="absolute top-2 right-2 text-xl text-black transition duration-200 hover:scale-110 cursor-pointer"
            />
            {!emailSent ? (
              <>
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-2 text-center sm:text-start">
                  Forgot Password?
                </h2>
                <p className="text-black mb-6 text-sm sm:text-base text-center sm:text-start">
                  Provide the email address you created your account and check
                  your mail inbox to reset your password
                </p>
                <div className="w-full flex flex-col gap-3">
                  <input
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    type="text"
                    required
                    placeholder="Email Address *"
                    className="w-full bg-gray-200 h-12 px-3 placeholder:text-gray-500"
                    name=""
                    id=""
                  />
                  <button
                    onClick={handleForgotPassword}
                    disabled={isLoading}
                    className="w-full h-12 flex items-center justify-center bg-black text-white disabled:opacity-60"
                  >
                    {isLoading ? (
                      <img
                        src="/assets/loading.png"
                        className="w-10 animate-spin"
                      />
                    ) : (
                      "Reset Password"
                    )}
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-black mb-4 text-center">
                  Email Successfull Sent!
                </h2>

                <div className="w-full flex items-center justify-center">
                  <video
                    className="max-w-[150px] w-full"
                    controls={false}
                    autoPlay
                    src="/assets/email.mp4"
                  ></video>
                </div>

                <p className="text-base text-black text-center mt-4">
                  Please check your inbox on{" "}
                  <span className="font-semibold">{resetEmail}</span>
                </p>
              </>
            )}
          </div>
        </div>
      )}
      <div className="flex-1 w-full h-full bg-primary flex items-center justify-center px-3 py-5">
        <div className="p-5 border-[3px] border-solid border-black bg-white max-w-sm w-full">
          <h1 className="text-2xl font-semibold text-black mb-2">
            Login to continue
          </h1>
          <span className="text-black">
            Provide the required information to continue
          </span>
          <form
            action=""
            onSubmit={handleLogIn}
            className="flex flex-col gap-4 mt-8 mb-4"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
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
              placeholder="Enter your password *"
              required
              className="w-full border-[2px] border-solid border-black h-12 px-3 placeholder:text-gray-500"
              name=""
              id=""
            />
            <div className="w-full text-end">
              <span
                onClick={() => setShowForgotPassword(true)}
                className="underline underline-offset-2 text-black font-semibold cursor-pointer"
              >
                Forgot Password?
              </span>
            </div>
            <button
              disabled={disabledBtn}
              className="w-full flex items-center justify-center h-12 bg-black text-white disabled:opacity-60"
            >
              {!isSubmitting ? (
                "Login"
              ) : (
                <img src="/assets/loading.png" className="w-10 animate-spin" />
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
            disabled={isDisabled}
            onClick={handleSignInWithGoogle}
            className="flex items-center gap-2 w-full justify-center h-12 bg-transparent text-black font-semibold transistion-all duration-200 active:scale-95 border-[2px] border-solid border-black disabled:opacity-80 active:disabled:scale-100 hover:disabled:bg-black hover:disabled:text-white mb-5"
          >
            <FcGoogle className="text-2xl" />
            Sign In With Google
          </button>
          <div className="flex items-center justify-center">
            <span className="text-black place-self-center text-center">
              New here?{" "}
              <Link
                href="/get-started"
                className="font-semibold underline underline-offset-2"
              >
                Create your account
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
