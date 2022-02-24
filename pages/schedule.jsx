import Navbar from "../components/core/Navbar";
import { useRouter } from "next/router";
import Link from "next/link";
import Countdown from "react-countdown";
import { motion } from "framer-motion";
import Footer from "../components/core/Footer";

function EventCard(props) {
  const { text, title, stage } = props;
  return (
    <div className="relative rounded-sm bg-gray-800 p-3">
      <div className="text-left">
        <h3 className="text-md font-semibold text-white">
          {title}
        </h3>
        <p className="text-sm text-white">{text}</p>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.2 }}
            className="mx-14 text-6xl font-bold text-white sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            Schedule
          </motion.h1>
          <div className="mx-3 mt-5 grid w-2/3 grid-cols-1 gap-3 sm:w-2/3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
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
      <Footer/>
    </>
  );
}
