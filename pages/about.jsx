import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import officerImage from "../public/tsaofficers.png";
import Image from "next/image";

import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="mx-14 mt-6 text-white text-6xl font-extrabold sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            About
          </motion.h1>
          <p className="my-3 w-2/3 max-w-prose text-left font-medium text-white">
            The Technology Student Association (TSA) is a
            national organization of students engaged in
            STEM (science, technology, engineering, and
            mathematics).
          </p>
          <Image
              alt="an image of 5 TSA officers"
              src={officerImage}
              width={300}
              height={191}
              layout="fixed"
              placeholder="blur"
            />
        </div>
      </div>
      <Footer/>
    </>
  );
}
