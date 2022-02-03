import Navbar from "../components/core/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-app-a to-slate-900 overflow-hidden scroll-smooth">
        <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
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
        </div>
      </div>
    </>
  );
}
