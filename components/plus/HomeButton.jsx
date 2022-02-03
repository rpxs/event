import { motion } from "framer-motion";
import { GitHub, RotateCw, Check } from "react-feather";
import { useUser } from "@auth0/nextjs-auth0";

export default function HomeButton() {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="mt-4 flex w-3/4 cursor-pointer flex-row items-center justify-center rounded-md border-2 border-transparent bg-gray-800 p-3 text-center text-white transition duration-200 ease-in-out hover:border-2 hover:border-gray-800 hover:bg-transparent hover:shadow-md sm:w-2/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <RotateCw className="mr-4 animate-spin" />
        Loading...
      </motion.div>
    );
  if (!user)
    return (
      <motion.a
        href="/api/auth/login"
        whileHover={{ scale: 1.03 }}
        className="mt-4 flex w-3/4 cursor-pointer flex-row items-center justify-center rounded-md border-2 border-transparent bg-gray-800 p-3 text-center text-white transition duration-200 ease-in-out hover:border-2 hover:border-gray-800 hover:bg-transparent hover:shadow-md sm:w-2/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
      >
        <GitHub className="mr-4" />
        Register With GitHub
      </motion.a>
    );
  return (
    <motion.a
      href="/schedule"
      whileHover={{ scale: 1.03 }}
      className="mt-4 flex w-3/4 cursor-pointer flex-row items-center justify-center rounded-md border-2 border-transparent bg-gray-800 p-3 text-center text-white transition duration-200 ease-in-out hover:border-2 hover:border-gray-800 hover:bg-transparent hover:shadow-md sm:w-2/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
    >
      <Check className="mr-4" />
      Check the Schedule
    </motion.a>
  );
}
