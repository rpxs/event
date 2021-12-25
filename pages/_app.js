import "tailwindcss/tailwind.css";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@auth0/nextjs-auth0";
import "../globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Component {...pageProps} />
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </UserProvider>
    </>
  );
}

export default MyApp;
