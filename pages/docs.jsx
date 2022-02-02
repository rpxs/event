import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import Head from "next/head";


export default function Docs() {

  return (
    <>
      <Head></Head>
      <Navbar />
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-app-a to-slate-900 overflow-hidden overflow-none">
        <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
         <h1 className="text-6xl font-bold text-gray-200">Documentation</h1>
         <p className="mt-3 text-white font-medium w-2/3">
              This is documentation and an overview of sorts on the website. Let&apos;s get into it!
         </p>
         <p className="mt-3 text-white font-medium w-2/3">
              This site is built with Tailwind CSS and Next.js. Let&apos;s see take a deep dive into the code.
         </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
