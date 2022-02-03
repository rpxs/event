import Link from "next/link";
export function NavLink(props) {
  const { text, to } = props;

  return (
    <>
      <li>
        <Link href={to}>
          <a
            className="rounded-sm p-2 font-sans text-sm font-medium text-gray-400 transition duration-200 ease-in-out hover:text-white"
            style={{}}
          >
            {text}
          </a>
        </Link>
      </li>
    </>
  );
}
