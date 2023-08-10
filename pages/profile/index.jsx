import React, { useEffect } from "react";
import { useUserAuth } from "@/context/UserAuth";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

const ProfilePage = () => {
  const router = useRouter();
  const { user } = useUserAuth();

  useEffect(() => {
    if (!user) {
      router.push("/get-started");
    }
  }, []);

  return (
    <main className="w-full min-h-screen h-screen selection:text-white selection:bg-black">
      <Navbar />
    </main>
  );
};

export default ProfilePage;
