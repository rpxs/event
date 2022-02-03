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
        <div className="mx-4 mt-14 inline-block items-start text-xl font-bold uppercase tracking-widest text-white">
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
      <div className="overflow-none flex min-h-screen flex-col overflow-hidden bg-gradient-to-r from-app-a to-slate-900">
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <p className="text-lg font-bold uppercase tracking-widest text-teal-500">
            <Scribble />
            Feb. 24-26
          </p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2 }}
            className="mx-14 mt-6 text-6xl font-extrabold text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            TSA Conference{" "}
            <span className="bg-[url('https://i.giphy.com/media/2tNvsKkc0qFdNhJmKk/giphy.webp')] bg-clip-text text-transparent">
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
        <div className="mt-14 flex flex-col items-center justify-center md:mt-14 lg:mt-14 xl:mt-14">
          <HomeButton />
        </div>
      </div>
      <Footer />
    </>
  );
}
