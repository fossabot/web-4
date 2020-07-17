import React from "react";
import { Navbar, NavbarProps } from "./navbar";

export default {
  component: Navbar,
  title: "Navbar",
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: NavbarProps = {};

  return <Navbar />;
};
