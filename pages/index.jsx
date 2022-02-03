import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import Scribble from "../components/plus/Scribble";
import HomeButton from "../components/plus/HomeButton";
import Head from "next/head";
import { GitHub } from "react-feather";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

export default function Home() {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }) => {
    if (completed) {
      // Render a complete state
      return <span>conf starting</span>;
    } else {
      // Render a countdown
      return (
        <div className="inline-block items-start text-white text-xl mt-14 uppercase tracking-widest font-bold mx-4">
          <p>
            {days} days, {hours} hours
          </p>
          <motion.p>
            {minutes} minutes,{" "}
            <motion.span>{seconds}</motion.span> seconds
          </motion.p>
        </div>
      );
    }
  };
  return (
    <>
      <Head></Head>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-app-a to-slate-900 overflow-hidden overflow-none">
        <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
          <p className="uppercase text-teal-500 tracking-widest font-bold text-lg">
            <Scribble />
            Feb. 24-26
          </p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2 }}
            className="text-white mx-14 font-extrabold text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl mt-6"
          >
            TSA Conference{" "}
            <span className="text-transparent bg-clip-text bg-[url('https://i.giphy.com/media/2tNvsKkc0qFdNhJmKk/giphy.webp')]">
              2022
            </span>
          </motion.h1>
          <Countdown
            date={Date.parse(
              "Wed Feb 24 2022 17:00:00 GMT-0700 (Mountain Standard Time)"
            )}
            renderer={renderer}
          />
        </div>
        <div className="flex flex-col items-center justify-center md:mt-14 lg:mt-14 xl:mt-14 mt-14">
          <HomeButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
