import Image from "next/image";
import Navbar from "../components/core/Navbar";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-app-a">
      <Navbar />
    </div>
  );
}
