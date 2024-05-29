import { Logo } from "@/components";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed bg-secondary-950 sm:bg-transparent w-full py-6">
      <div className="container">
        <div className="flex items-center">
          <div>
            <Logo />
          </div>
          <nav className="flex list-none">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
          </nav>
        </div>

        <div>
          <button className="border py-3 px-5 rounded-full text-white">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};
