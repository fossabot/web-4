import { text } from "@storybook/addon-knobs"
import React from "react"
import { NavbarLink, NavbarLinkProps } from "./navbar-link"

export default {
  component: NavbarLink,
  title: "NavbarLink",
}

export const primary = () => {
  const props: NavbarLinkProps = {
    label: text("label", "Product"),
    href: text("href", ""),
  }

  return <NavbarLink label={props.label} href={props.href} />
}
