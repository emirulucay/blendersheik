import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { MainContext, useContext } from "context";
import ThemeChanger from "./ThemeChanger";
import { LinkArrow } from "lib/icons";

export default function Header() {
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false);

  const router = useRouter();
  const { theme, themeValues } = useContext(MainContext);

  return (
    <div>
      <header className="fixed top-0 h-[52px] left-0 w-full bg-darkbg/[0.6] backdrop-blur-sm before:absolute before:bottom-0 before:bg-[#202020] before:w-full before:h-[0.5px] z-50 before:z-50 flex justify-between items-center">
        <div
          onClick={() => setBurgerOpen((prev) => !prev)}
          className={classNames(
            "z-50 w-6 absolute left-5 top-1/2 md:hidden text-gray-100 -translate-y-1/2 flex items-center justify-center flex-col gap-3 cursor-pointer p-2",
            { "!gap-0": burgerOpen }
          )}>
          <span className={classNames("w-6 h-[1px] bg-white block transition-all duration-100", { "rotate-45": burgerOpen })}></span>
          <span
            className={classNames("w-6 h-[1px] bg-white block transition-all duration-100", {
              "-rotate-45 -translate-y-[1px]": burgerOpen,
            })}></span>
        </div>
        <div className="relative w-full container flex justify-center md:justify-between items-center h-[66px]">
          <strong className="md:flex-1">
            <Link href="/" className={`${themeValues[theme]?.logo} logo font-inter font-bold text-[22px] select-none`}>
              blendersheik
            </Link>
          </strong>
          {/* desktop menu */}
          <ul className="md:flex align-center justify-center gap-8 hidden flex-1">
            <li>
              <Link
                href="/models"
                className={classNames("text-97 hover:text-white font-inter font-medium transition duration-300 select-none", {
                  "!text-white": router.pathname == "/models",
                })}>
                Models
              </Link>
            </li>
            <li>
              <Link
                href="/builds"
                className={classNames("text-97 hover:text-white font-inter font-medium transition duration-300 select-none", {
                  "!text-white": router.pathname == "/builds",
                })}>
                Builds
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={classNames("text-97 hover:text-white font-inter font-medium transition duration-300 select-none", {
                  "!text-white": router.pathname == "/about",
                })}>
                About
              </Link>
            </li>
            {/* <li>
              <Link href="/contact">
                <a
                  className={classNames("text-97 hover:text-white font-inter font-medium transition duration-300 select-none", {
                    "!text-white": router.pathname == "/contact",
                  })}>
                  Contact
                </a>
              </Link>
            </li> */}
          </ul>
          <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
            <ThemeChanger />
          </div>
          {/* mobil burger menu */}
          <ul
            className={classNames(
              "w-full h-[100vh] flex md:hidden fixed top-[60px] left-0 flex-col bg-09/[.99] backdrop-blur-sm gap-8 px-6 py-6 transition duration-300 z-50",
              {
                "-translate-x-full invisible opacity-0": !burgerOpen,
              }
            )}>
            <li>
              <Link
                href="/"
                className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl", {
                  "!text-white": router.pathname == "/",
                })}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/models"
                className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl", {
                  "!text-white": router.pathname == "/models",
                })}>
                Models
              </Link>
            </li>
            <li>
              <Link
                href="/builds"
                className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl", {
                  "!text-white": router.pathname == "/builds",
                })}>
                Builds
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={classNames("text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl", {
                  "!text-white": router.pathname == "/about",
                })}>
                About
              </Link>
            </li>
            {/* <li>
              <Link href="/contact">
                <a
                  className={classNames(
                    "text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl",
                    {
                      "!text-white": router.pathname == "/contact",
                    }
                  )}
                  href="#">
                  Contact
                </a>
              </Link>
            </li> */}
            <li>
              <a
                className="text-gray-400 hover:text-white font-inter font-medium transition duration-300 select-none text-xl flex items-center gap-2"
                href="https://www.instagram.com/blendersheik/"
                target="_blank"
                rel="noreferrer noopener">
                Instagram
                <LinkArrow className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
