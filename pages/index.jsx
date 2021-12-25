import Navbar from "../components/core/Navbar";
import Scribble from "../components/plus/Scribble";
import { GitHub } from "react-feather";
import { useRouter } from "next/router";
import Link from "next/link";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
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
        <div className="flex flex-col items-start text-white text-xl mt-14 uppercase tracking-widest font-bold mx-4">
          <p>{days} days</p>
          <p>{hours} hours</p>
          <p>{minutes} minutes</p>
          <p>{seconds} seconds</p>
        </div>
      );
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-app-a to-slate-900 overflow-hidden overflow-none">
        <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
          <p className="uppercase text-emerald-600 tracking-widest font-bold text-lg">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-800 to-emerald-500">
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
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="flex flex-row items-center justify-center transition duration-200 ease-in-out bg-blue-600 hover:shadow-md border-2 border-transparent text-white hover:bg-indigo-600 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/4 w-3/4 text-center p-3 rounded-md mt-4 cursor-pointer"
          >
            <GitHub className="mr-4" />
            <Link href="/api/auth/login">
              Register With GitHub
            </Link>
          </motion.button>
        </div>{" "}
      </div>
    </>
  );
}
