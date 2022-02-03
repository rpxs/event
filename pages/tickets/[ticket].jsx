import Navbar from "../../components/core/Navbar";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
export default function Ticket() {
  const router = useRouter();
  const { ticket } = router.query;
  let rawTicket = "000000".concat(ticket);
  const id = rawTicket.slice(-6);

  return (
    <div className="flex min-h-screen flex-col bg-app-a">
      <Navbar />
      <div className="mt-36 flex h-full flex-col items-center justify-center">
        <div className="rounded-sm border border-blue-500 bg-app-b">
          <div className="p-3 text-center tracking-widest text-white">
            № {id}
          </div>
        </div>
      </div>
    </div>
  );
}
