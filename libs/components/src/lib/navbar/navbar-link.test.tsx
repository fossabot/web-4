import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import NavbarLink from "./navbar-link"

describe(" NavbarLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavbarLink label="Product" />)
    expect(baseElement).toBeTruthy()
  })
  it("renders correctly", () => {
    const tree = renderer.create(<NavbarLink label="Product" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
