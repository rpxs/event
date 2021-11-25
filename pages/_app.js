import "tailwindcss/tailwind.css";
import { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default MyApp;
