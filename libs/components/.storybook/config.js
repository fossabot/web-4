import { configure, addDecorator } from "@storybook/react"
import { withKnobs } from "@storybook/addon-knobs"
import { withA11y } from "@storybook/addon-a11y"
import "../../../css/tailwind.css"

addDecorator(withKnobs)
addDecorator(withA11y)
configure(require.context("../src/lib", true, /\.stories\.(j|t)sx?$/), module)