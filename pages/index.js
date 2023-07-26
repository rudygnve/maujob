import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Blog from "@/components/Blog";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full min-h-screen h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>MauJob - Find Your Dream Job in Mauritius</title>
      </Helmet>
      <Header />
      <Categories />
      <Featured />
      <Blog />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
