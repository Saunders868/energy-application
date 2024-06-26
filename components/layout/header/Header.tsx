"use client";

import { Button, Logo, Menu } from "@/components";
import Link from "next/link";
import cx from "classnames";
import { useEffect, useState } from "react";
import { useWindowScreenSize } from "@/hooks/useWindowSize";
import useDetectScroll from "@smakss/react-scroll-direction";
import headerData from "@/data/header.json";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const size = useWindowScreenSize();

  const { scrollDir } = useDetectScroll();

  useEffect(() => {
    if (size.width > 768) {
      setShowMenu(false);
    }
  }, [size.width]);

  return (
    <header
      className={cx(
        "fixed sm:border-b-2 duration-300 z-50 sm:border-none bg-secondary-950 border-primary-300 w-full py-6",
        scrollDir === "down" && "-translate-y-full"
      )}
    >
      <div className="container flex justify-between">
        <div className="flex items-center gap-10">
          <Link href={"/"} className="z-10">
            <Logo />
          </Link>
          <nav
            className={cx(
              "flex list-none gap-8 absolute sm:relative sm:translate-y-0 h-screen sm:h-fit w-screen sm:w-fit bg-secondary-950 sm:bg-transparent top-0 right-0 text-white flex-col sm:flex-row items-center justify-center duration-300",
              showMenu === true ? "translate-y-0" : "-translate-y-full"
            )}
          >
            {headerData.header.map((items, index: number) => (
              <li key={index}>
                <Link
                  className="capitalize"
                  onClick={toggleMenu}
                  href={items.href}
                >
                  {items.label}
                </Link>
              </li>
            ))}
          </nav>
        </div>

        <div className="flex z-10">
          <button
            onClick={toggleMenu}
            className="p-3 sm:hidden flex items-center justify-center border rounded-full"
          >
            <Menu />
          </button>
          <Button variant="tertiary-reversed">Get in touch</Button>
        </div>
      </div>
    </header>
  );
};
