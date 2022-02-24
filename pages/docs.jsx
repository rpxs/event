import Navbar from "../components/core/Navbar";
import Footer from "../components/core/Footer";
import codebaseImage from "../public/codebase.png";
import Head from "next/head";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
// vscDarkPlus
const Link = (props) => {
  return (
    <a
      className="text-current underline decoration-blue-500 decoration-2 underline-offset-2 hover:text-teal-500 hover:decoration-teal-500 hover:decoration-4"
      href={props.to}
      target="_blank"
      rel="noopener
    noreferrer"
    >
      {props.text}
    </a>
  );
};

export default function Docs() {
  const str1 = `import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink(props) {
  const { text, to } = props;
  const router = useRouter();
  const style = {
    color: router.asPath === to ? "#6366F1" : "normal",
  };
  return (
    <li>
      <Link href={to}>
        <a
          style={style}
          className="text-sm text-gray-400 font-medium font-sans hover:text-white duration-200 transition ease-in-out p-2 rounded-sm"
        >
          {text}
        </a>
      </Link>
    </li>
  )
};`;
  return (
    <>
      <Head>
        <title>TSA Conference - Documentation</title>
      </Head>
      <Navbar />
      <div className="overflow-none flex min-h-screen flex-col overflow-hidden bg-gradient-to-r from-app-a to-slate-900">
        <div className="mt-36 flex w-screen flex-col items-center justify-center text-center antialiased">
          <h1 className="text-5xl font-bold text-gray-200">
            Documentation
          </h1>
          <div className="my-3 flex w-2/3 max-w-prose flex-col items-center gap-5 text-left font-medium text-white">
            <p>
              The documentation below is a work in progress,
              it contains information on how the project was
              created, and a plan of work log.
            </p>
            <p>
              This site was built with Tailwind CSS and
              Next.js. To get started, let&apos;s look at
              the codebase. You can see the file structure
              below.
            </p>
            <Image
              alt="a screenshot of the file structure"
              src={codebaseImage}
              width={300}
              height={500}
              layout="fixed"
              placeholder="blur"
            />
            <p>
              Let&apos;s break it down. The .next folder
              holds all files that are compiled and served
              by Next.js. Think of it as the end result of
              the build process. The .storybook and stories
              folder are for{" "}
              <Link
                to="https://storybook.js.org"
                text="Storybook"
              />
              , a component explorer/visualizer. The
              components folder is for React components that
              can be used throughout the project.
              Here&apos;s an example:
            </p>
            <SyntaxHighlighter
              className="w-full"
              language="jsx"
              style={vscDarkPlus}
            >
              {str1}
            </SyntaxHighlighter>
            <p>
              This is the component for all links that you
              see on the navigation bar of this site. The
              color of the link will be white unless the
              current page you&apos;re on is the link. Like
              right now, the &quot;Docs&quot; link should be
              purple for you.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
