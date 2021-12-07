import Navbar from "../components/core/Navbar";
import { useRef } from "react";
import Scribble from "../components/plus/Scribble";
import { GitHub } from "react-feather"
import { useRouter } from "next/router";
import Link from "next/link";
export default function Home() {
  const router = useRouter();
  const inputRef = useRef(null);
  return (
    <div className="flex flex-col min-h-screen bg-app-a">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
        <p className="uppercase text-sky-500 tracking-widest font-bold text-lg">
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

      <div className="flex flex-col items-center justify-center mt-24">
        <button className="flex flex-row items-center justify-center transition duration-200 ease-in-out bg-blue-600 border-2 border-app-b text-app-a hover:text-blue-600 hover:bg-app-a hover:border-blue-600 hover xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/4 w-3/4 text-center p-3 rounded-md mt-4 cursor-pointer">
       <GitHub className="mr-4"/>  <Link href="/api/auth/login"> Register With GitHub </Link>
        </button>
      </div>
    </div>
  );
}
