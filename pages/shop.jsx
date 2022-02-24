import Navbar from "../components/core/Navbar";
import Products from "../components/core/Products";
import Footer from "../components/core/Footer";
import Head from "next/head"
export default function Schedule() {
  return (
    <>
          <Head>
        <title>TSA Conference - Shop</title>
      </Head>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
<Products/>
      </div>
      <Footer/>
    </>
  );
}
