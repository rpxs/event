import { Search, Menu } from "react-feather";
import NavLink from "./NavLink";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Navbar() {
  return (
    <nav className="bg-app-b z-30 sticky top-0 px-6 border-b-2 border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-no-wrap items-center justify-between sm:px-0 mx-auto lg:mx-none">
          <div>
            <div className="cursor-pointer flex items-center leading-none float-left py-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Link href="/" className="w-8">
                  <motion.div
                    className="w-8"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1 }}
                  >
                    <img src="/node.png" className="w-8" alt="Logo" />
                  </motion.div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex md:hidden cursor-pointer bg-app-a items-center px-3 py-2 rounded text-white">
            <Menu />
          </div>
          <ul className="space-x-0 space-y-5 hidden md:flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-4 md:justify-center text-sm w-full font-medium font-mono md:w-auto select-none">
            <NavLink text="About" to="/about" />
            <NavLink text="Schedule" to="/schedule" />
            <NavLink text="Sponsors" to="/sponsors" />
            <NavLink text="Speakers" to="/speakers" />
            <NavLink text="Expo" to="/expo" />
          </ul>
        </div>
      </div>
    </nav>
  );
}
// <button className="transition duration-300 ease-in bg-green-700 hover:bg-green-800 my-auto rounded-sm p-2 mr-4">
//   <Search className="mx-auto my-auto" />
// </button>
