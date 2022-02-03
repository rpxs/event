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
            transition={{ duration: 1.3 }}
            className="mx-14 mt-6 bg-gradient-to-tr from-sky-800 to-emerald-500 bg-clip-text text-6xl font-extrabold text-transparent sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            About
          </motion.h1>
          <p className="my-3 w-2/3 max-w-prose text-left font-medium text-white">
            The Technology Student Association (TSA) is a
            national organization of students engaged in
            STEM (science, technology, engineering, and
            mathematics).
          </p>
        </div>
      </div>
    </>
  );
}
