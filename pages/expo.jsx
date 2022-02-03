import Navbar from "../components/core/Navbar";
import { motion } from "framer-motion";
const Link = (props) => {
  return (
    <a
      className="text-current underline decoration-blue-500 decoration-2 underline-offset-2 hover:text-teal-500 hover:decoration-teal-500 hover:decoration-4"
      href={props.to}
      target="_blank"
      rel="noopener
    noreferrer"
    >
      {props.text}
    </a>
  );
};
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="mx-14 mt-6 text-6xl font-extrabold text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            Expo
          </motion.h1>
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 text-left text-4xl font-semibold text-white">
          <Link
            to="https://apply.gcu.edu/Account/Login"
            text="Grand Canyon University"
          />
          <Link to="https://x-cal.us/" text="X-CAL" />
          <Link
            to="http://cccs.edu/"
            text="Colorado Community College System"
          />
        </div>
      </div>
    </>
  );
}
