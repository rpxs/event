/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/core/Navbar";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Admin({ user }) {
  if (user.email != "me@rpxs.me") {
    return (
      <div className="flex flex-col min-h-screen bg-app-a">
        <Navbar />
        <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
          <h1 className="text-3xl font-bold text-red-500">
            YOU ARE NOT AUTHORIZED TO ACCESS THIS PAGE
          </h1>
          <p className="text-md text-white mt-6">
            This page can be used by site admins to hide content from normal
            users.
          </p>
        </div>
      </div>
    );
  } else return (
    <div className="flex flex-col min-h-screen bg-app-a">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-screen mt-36 antialiased text-center">
        <h1 className="text-3xl font-bold text-white">
          only me@rpxs.me can see this page
        </h1>
        <p className="text-md text-white mt-6">
          If you are not authenticated, you cannot see this page due to the
          middleware. The text below is &quot;injected&quot; by
          getServerSideProps
        </p>
        <p className="text-md text-red-500 mt-3">name: {user.name}</p>
        <p className="text-md text-red-500 mt-3">username: {user.nickname}</p>
        <img
          alt="profile picture"
          className="rounded-full w-32 mt-6 border-2 border-red-500"
          src={user.picture}
        />
      </div>
    </div>
  );
}
export const getServerSideProps = withPageAuthRequired();
