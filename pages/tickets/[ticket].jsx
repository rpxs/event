import Navbar from "../../components/core/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Ticket() {

  const router = useRouter();
  const { ticket } = router.query;
  let rawTicket = "000000".concat(ticket);
  const id = rawTicket.slice(-6);


  return (
    <div className="flex flex-col min-h-screen bg-app-a">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full mt-36">
        <div className="bg-app-b border border-blue-500 rounded-sm">
          <div className="text-center text-white tracking-widest p-3">
            № {id}
          </div>
        </div>
      </div>
    </div>
  );
}
