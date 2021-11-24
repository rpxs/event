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
          className="text-sm text-gray-400 font-medium font-mono hover:text-white duration-200 transition ease-in-out p-2 rounded-sm"
        >
          {text}
        </a>
      </Link>
    </li>
  );
}
