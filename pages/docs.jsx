import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import Scribble from "../components/plus/Scribble";
import HomeButton from "../components/plus/HomeButton";
import Head from "next/head";
import { GitHub } from "react-feather";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

export default function Home() {


  return (
    <>
      <Head></Head>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-app-a to-slate-900 overflow-hidden overflow-none">
        <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
         <h1 className="text-4xl font-bold text-gray-200">Documentation</h1>
         <p className="mt-3 text-white font-medium w-1/2">
              This is documentation and an overview of sorts on the project. 
         </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
