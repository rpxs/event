import { motion } from "framer-motion";
import { GitHub, RotateCw, Check } from "react-feather";
import { useUser } from "@auth0/nextjs-auth0";

export default function HomeButton() {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex flex-row items-center justify-center transition duration-200 ease-in-out bg-gray-800 hover:shadow-md border-2 border-transparent text-white hover:bg-transparent hover:border-2 hover:border-gray-800 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/4 w-3/4 text-center p-3 rounded-md mt-4 cursor-pointer"
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
        className="flex flex-row items-center justify-center transition duration-200 ease-in-out bg-gray-800 hover:shadow-md border-2 border-transparent text-white hover:bg-transparent hover:border-2 hover:border-gray-800 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/4 w-3/4 text-center p-3 rounded-md mt-4 cursor-pointer"
      >
        <GitHub className="mr-4" />
        Register With GitHub
      </motion.a>
    );
    return (
        <motion.a
        href="/schedule"
        whileHover={{ scale: 1.03 }}
        className="flex flex-row items-center justify-center transition duration-200 ease-in-out bg-gray-800 hover:shadow-md border-2 border-transparent text-white hover:bg-transparent hover:border-2 hover:border-gray-800 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-2/4 w-3/4 text-center p-3 rounded-md mt-4 cursor-pointer"
      >
        <Check className="mr-4" />
        Check the Schedule
      </motion.a>
    )

}
