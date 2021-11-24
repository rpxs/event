import Navbar from "../components/core/Navbar";
import { useRef } from "react";
import Scribble from "../components/plus/Scribble";
import { motion } from "framer-motion";
export default function Home() {
  const inputRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col min-h-screen bg-app-a">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
        <p className="uppercase text-blue-500 tracking-widest font-bold text-lg">
          <Scribble />
          December 7
        </p>
        <p className="animate__fade-in-top text-white mx-14 font-extrabold text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl mt-6">
          Node.js Conference{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-sky-800 to-green-400">
            2021
          </span>
        </p>
      </div>
      <form
        className="flex flex-col items-center justify-center mt-24"
        onSubmit={register}
      >
        <input
          placeholder="Enter email to register"
          type="email"
          className="xl:w-1/6 lg:w-1/3 md:w-1/2 sm:w-2/4 w-3/4 rounded-lg bg-app-b text-center p-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          required
        />
        <input
          type="submit"
          value="Register"
          className="transition duration-200 ease-in-out bg-blue-500 hover:bg-blue-600 xl:w-1/6 lg:w-1/3 md:w-1/2 sm:w-2/4 w-3/4 text-center p-3 rounded-md mt-4 cursor-pointer"
        />
      </form>
    </div>
  );
}
