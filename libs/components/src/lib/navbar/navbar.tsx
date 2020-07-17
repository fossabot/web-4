import React, { useState } from "react";
import { NavbarLink } from "./navbar-link";
import Link from "next/link";
/* eslint-disable-next-line */
export interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <nav role="navigation" className="p-8 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto md:flex-no-wrap">
        <Link href="/">
          <a className="text-xl font-semibold">
            <span className="text-gray-800">PERFOLIO</span>
            <span className="text-primary-500">RESEARCH</span>
          </a>
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-400 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            open ? "" : "hidden"
          } w-full md:w-auto md:flex md:items-center justify-between ml-4 md:ml-0`}
        >
          <ul className="flex flex-col pt-4 mt-4 -mx-4 space-y-4 md:space-x-2 md:space-y-0 md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:space-x-16">
            <NavbarLink label="Product"></NavbarLink>
            <NavbarLink label="Features"></NavbarLink>
            <NavbarLink label="About us"></NavbarLink>
            <div className="border-t border-gray-300 md:border-0"></div>
            <NavbarLink label="Documentation"></NavbarLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
