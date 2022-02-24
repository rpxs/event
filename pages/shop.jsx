import Navbar from "../components/core/Navbar";
import Products from "../components/core/Products";
import Footer from "../components/core/Footer";

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
<Products/>
      </div>
      <Footer/>
    </>
  );
}
