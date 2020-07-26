import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Navbar from "./navbar"

describe(" Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar logo={<span>I am a logo</span>} />)
    expect(baseElement).toBeTruthy()
  })
  it("renders correctly", () => {
    const tree = renderer.create(<Navbar logo={<span>I am a logo</span>} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
