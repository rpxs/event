export default function Footer() {
  return (
    <footer className="sticky border-t border-app-b bg-gradient-to-r from-app-a to-slate-900 px-6">
      <ul className="container mx-auto items-center justify-between py-4 text-sm text-white sm:flex">
        <li>
          Follow us on{" "}
          <a
            href="https://twitter.com/nationaltsa"
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
