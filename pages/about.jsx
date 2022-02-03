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
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2 }}
            className="mx-14 mt-6 text-6xl font-extrabold text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            TSA Conference{" "}
            <span className="bg-gradient-to-tr from-sky-800 to-emerald-500 bg-clip-text text-transparent">
              2022
            </span>
          </motion.h1>
        </div>
      </div>
    </>
  );
}
