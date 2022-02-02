import Navbar from "../components/core/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import Countdown from "react-countdown";
import { motion } from "framer-motion";

function EventCard(props) {
  const { text, title, stage } = props;
  return (
    <div className="bg-gray-800 p-3 rounded-sm relative">
      <div className="text-left">
        <h3 className="text-white font-semibold text-md">
          {title}
        </h3>
        <p className="text-white text-sm">{text}</p>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-app-a to-slate-900 overflow-hidden scroll-smooth">
        <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2 }}
            className="text-white mx-14 font-extrabold text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            Schedule
          </motion.h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-3 mx-3 mt-5 w-2/3 sm:w-2/3 md:w-1/2">
            <EventCard
              title="Day One: 6:00 PM"
              text="Opening Ceremony"
              stage="T"
            />
            <EventCard
              title="Day Two: 11:00 AM"
              text="Interviews"
              stage="T"
            />
            <EventCard
              title="Day Two: 2:00 PM"
              text="Interviews Again"
              stage="T"
            />
            <EventCard
              title="Day Three: 11:00 AM"
              text="Team Event Interviews"
              stage="T"
            />
          </div>
        </div>
      </div>
    </>
  );
}
