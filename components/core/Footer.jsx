export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-app-a to-slate-900 border-t border-app-b px-6 sticky">
      <ul className="sm:flex items-center justify-between container mx-auto py-4 text-sm text-white">
        <li>
          Follow us on {" "}
          <a
            href="https://twitter.com/reikerjack"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold"
          >
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  );
}
