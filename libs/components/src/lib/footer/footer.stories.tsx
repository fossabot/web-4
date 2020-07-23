import { text } from "@storybook/addon-knobs";
import React from "react";
import { Footer, FooterProps } from "./footer";

export default {
  component: Footer,
  title: "Footer",
};

export const primary = () => {
  const props: FooterProps = {
    color: text("color", "primary"),
  };

  return <Footer color={props.color} />;
};



export const carbon = () => {
  const props: FooterProps = {
    color: text("color", "carbon"),
  };

  return <Footer color={props.color} />;
};



export const gray = () => {
  const props: FooterProps = {
    color: text("color", "orange"),
  };

  return <Footer color={props.color} />;
};
