import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import "../../../css/tailwind.css";

addDecorator(withKnobs);
configure(require.context("../src/lib", true, /\.stories\.(j|t)sx?$/), module);
