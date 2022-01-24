import Link from "next/link";
export function NavLink(props) {
  const { text, to } = props;

  return (
    <>
    <li>
      <Link href={to}>
        <a
          className="text-sm text-gray-400 font-medium font-sans hover:text-white duration-200 transition ease-in-out p-2 rounded-sm"
          style={{}}
        >
          {text}
        </a>
      </Link>
    </li>
    </>
  );
}
