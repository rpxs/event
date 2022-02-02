/* eslint-disable @next/next/no-img-element */
import { Menu, X } from "react-feather";
import NavLink from "./NavLink";
import Link from "next/link";
import { motion } from "framer-motion";
import User from "../plus/User";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleMenu = () => {
    if (isOpen) setOpen(false);
    if (!isOpen) setOpen(true);
  };
  let mobileLinkStr =
    "md:flex flex-col md:flex-row md:items-center space-x-0 space-y-5 md:space-y-0 md:space-x-4 md:justify-center text-sm w-full md:w-auto select-none";
  return (
    <nav className="z-50 sticky top-0 px-6 border-b-2 border-gray-800 bg-gradient-to-r from-app-a to-slate-900 select-none scroll-smooth">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-no-wrap items-center justify-between sm:px-0 mx-auto lg:mx-none">
          <div>
            <div className="cursor-pointer flex items-center leading-none float-left py-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Link href="/" className="w-8" passHref>
                  <motion.div
                    className="w-8"
                    initial={{ scale: 1.3 }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <img
                      src="/logo.png"
                      className="w-8"
                      alt="Logo"
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
          <div
            onClick={handleMenu}
            className="flex md:hidden cursor-pointer bg-app-a items-center px-3 py-2 rounded text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </div>
          <ul
            className={
              isOpen
                ? "block pb-4 " + mobileLinkStr
                : "hidden " + mobileLinkStr   
            }
          >
            {" "}
            <NavLink text="About" to="/about" />
            <NavLink text="Docs" to="/docs" />
            <NavLink text="Schedule" to="/schedule" />
            <NavLink text="Expo" to="/expo" />
            <User />
          </ul>
        </div>
      </div>
    </nav>
  );
}
// <button className="transition duration-300 ease-in bg-green-700 hover:bg-green-800 my-auto rounded-sm p-2 mr-4">
//   <Search className="mx-auto my-auto" />
// </button>
