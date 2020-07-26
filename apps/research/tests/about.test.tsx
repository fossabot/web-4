import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import About from "../pages/about"

describe(" About", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<About />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
