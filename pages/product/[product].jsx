import Navbar from "../../components/core/Navbar";
import Footer from "../../components/core/Footer";
import Head from "next/head";
import { useRouter } from "next/router";
import fetcher from "../../lib/fetcher";
import useSWR from "swr";
import Tilt from "react-tilt";
export default function Product() {
    const router = useRouter();
    const { product } = router.query;
    const { data } = useSWR(`/api/product/${product}`, fetcher);
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
      <Head>
        <title>TSA Shop - {data?.imageAlt ?? "loading..."}</title>
      </Head>
     <div className="self-center max-w-full">
        <h1 className="text-white text-4xl w-60 font-semibold my-6 self-center">
          {data?.imageAlt ?? "Unknown Item"}
        </h1>
        <div className="w-60 overflow-hidden rounded-lg bg-white">
          <Tilt
            className="w-full h-full object-center object-cover group-hover:opacity-70"
            options={{ max: 35 }}
          >
            <img
              src={data?.imageSrc ?? "https://dummyimage.com/256x256/fff/aaa"}
              className="rounded-lg overflow-hidden w-60 self-center"
            />
          </Tilt>
        </div>
        <p className="py-8 w-60 text-md text-gray-300">
          {data?.imageAlt ?? "loading..."}
        </p>
        <button
          className="transition duration-500 ease-in-out bg-purple-500 hover:bg-purple-700 font-bold w-full h-10 rounded-md"
          onClick={notify}
        >
          Buy ({data?.price ?? "$0"})
        </button>
      </div>
      </div>
      <Footer/>
    </>
  );
}