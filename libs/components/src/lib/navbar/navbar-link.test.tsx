import React from "react"
import renderer from "react-test-renderer"
import NavbarLink from "./navbar-link"

describe(" NavbarLink", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NavbarLink label="Product" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
