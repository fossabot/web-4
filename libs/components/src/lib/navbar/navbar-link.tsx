import React from "react"
import Link from "next/link"
/* eslint-disable-next-line */
export interface NavbarLinkProps {
  label: string
  href?: string
}

export const NavbarLink = (props: NavbarLinkProps) => {
  return (
    <Link href={props.href || "/"}>
      <a className="text-lg font-medium text-gray-700 transition duration-150 ease-in-out hover:text-black">
        {props.label}
      </a>
    </Link>
  )
}

export default NavbarLink
