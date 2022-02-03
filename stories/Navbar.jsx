/* eslint-disable @next/next/no-img-element */
import { Menu, X } from "react-feather";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
export function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const handleMenu = () => {
    if (isOpen) setOpen(false);
    if (!isOpen) setOpen(true);
  };
  let mobileLinkStr =
    "md:flex flex-col md:flex-row md:items-center space-x-0 space-y-5 md:space-y-0 md:space-x-4 md:justify-center text-sm w-full md:w-auto select-none";
  return (
    <nav className="sticky top-0 z-50 select-none scroll-smooth border-b-2 border-gray-800 bg-app-b bg-gradient-to-r from-gray-900 to-slate-900 px-6">
      <div className="container mx-auto">
        <div className="md:flex-no-wrap lg:mx-none mx-auto flex flex-wrap items-center justify-between sm:px-0">
          <div>
            <div className="float-left flex cursor-pointer items-center py-2 leading-none">
              <div className="flex h-10 w-10 items-center justify-center">
                <Link href="/" className="w-8" passHref>
                  <motion.div
                    className="w-8"
                    initial={{ scale: 1.3 }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <img
                      src="https://event-teal.vercel.app/logo.png"
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
            className="flex cursor-pointer items-center rounded bg-gray-900 px-3 py-2 text-white md:hidden"
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
          </ul>
        </div>
      </div>
    </nav>
  );
}
