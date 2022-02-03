import Link from "next/link";
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
          className="rounded-sm p-2 font-sans text-sm font-medium text-gray-400 transition duration-200 ease-in-out hover:text-white"
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
