/* eslint-disable @next/next/no-img-element */
import { useUser } from "@auth0/nextjs-auth0";
import { RotateCw } from "react-feather";
import Link from "next/link";
import NavLink from "../core/NavLink";
export default function User() {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <li>
        <RotateCw className="animate-spin text-gray-400" />
      </li>
    );
  if (error) return <li>{error.message}</li>;
  if (!user)
    return (
      <li className="text-sm text-gray-400 font-medium font-sans hover:text-white duration-200 transition ease-in-out px-2 rounded-sm">
        <Link href="/api/auth/login">Login</Link>
      </li>
    );
  return (
    user && (
      <li className="flex flex-row items-center">
        <NavLink text={user.name} to="/api/auth/logout" />
        <img
          className="w-8 rounded-full"
          src={user.picture}
          alt="Profile Picture"
        />
      </li>
    )
  );
}