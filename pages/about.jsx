import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import officerImage from "../public/tsaofficers.webp";
import Image from "next/image";
import Head from "next/head"
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
      <Head>
        <title>TSA Conference - Home</title>
      </Head>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
            className="mx-14 mt-6 text-white text-6xl font-bold sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl"
          >
            About
          </motion.h1>
          <p className="my-6 w-2/3 max-w-prose text-left text-white">
            The Technology Student Association (TSA) is a
            national organization of students engaged in
            STEM (science, technology, engineering, and
            mathematics).
          </p>
          <Image
              alt="an image of 5 TSA officers"
              className="w-2/3"
              src={officerImage}
              width={490}
              height={310}
              layout="fixed"
              placeholder="blur"
            />
            <h3 className="my-6 w-2/3 text-4xl text-white font-bold">History</h3>
            <p className="my-3 w-2/3 max-w-prose text-left text-white">The Colorado Technology Student Association got its start in 1986 when it was granted a charter as a state affiliate of the American Industrial Arts Student Association (AIASA). Two years later, in 1988, AIASA would change its name to the Technology Student Association (TSA) and would become the Career and Technical Student Organization (CTSO) dedicated exclusively to students enrolled in engineering and technology classes at the secondary level.</p>
        <h3 className="my-6 w-2/3 text-4xl text-white font-bold">Mission</h3>
        <p className="my-3 w-2/3 max-w-prose text-left text-white">For more than three decades, Colorado TSA has been fulfilling our mission of preparing its members to foster personal growth, leadership, and opportunities in engineering and technology. Every day, our members apply and integrate these skills and concepts through curricular activities, competitions, and related programs.</p>
        <h3 className="my-6 w-2/3 text-4xl text-white font-bold">2022 Colorado Conference</h3>
        <p className="my-3 w-2/3 max-w-prose text-left text-white">The 2022 Colorado TSA State Conference is held at DTC Marriott from February 24th to February 26th. This website is a virtual alternative to the in-person conference.</p>

        </div>
      </div>
      <Footer/>
    </>
  );
}
