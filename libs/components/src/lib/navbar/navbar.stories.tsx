import React from "react"
import { Navbar, NavbarProps } from "./navbar"

export default {
  component: Navbar,
  title: "Navbar",
}

export const primary = () => {
  const props: NavbarProps = {
    logo: <p>Logo</p>,
  }

  return <Navbar logo={props.logo} />
}
