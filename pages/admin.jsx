/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/core/Navbar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Head from "next/head"
export default function Admin({ user }) {
  if (user.email != "me@rpxs.me") {
    return (
      <div className="flex min-h-screen flex-col scroll-smooth bg-gradient-to-r from-app-a to-slate-900">
        <Navbar />
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <h1 className="text-3xl font-bold text-red-500">
            YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE
          </h1>
          <p className="text-md mt-6 text-white">
            This page can be used by site admins to hide
            content from normal users.
          </p>
        </div>
      </div>
    );
  } else
    return (
      <>
        <div className="flex min-h-screen flex-col bg-app-a">
          <Navbar />
          <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
            <h1 className="text-3xl font-bold text-white">
              only me@rpxs.me can see this page
            </h1>
            <p className="text-md mt-6 text-white">
              If you are not authenticated, you cannot see
              this page due to the middleware. The text
              below is &quot;injected&quot; by
              getServerSideProps
            </p>
            <p className="text-md mt-3 text-red-500">
              name: {user.name}
            </p>
            <p className="text-md mt-3 text-red-500">
              username: {user.nickname}
            </p>
            <img
              alt="profile picture"
              className="mt-6 w-32 rounded-full border-2 border-red-500"
              src={user.picture}
            />
          </div>
        </div>
      </>
    );
}
export const getServerSideProps = withPageAuthRequired();
