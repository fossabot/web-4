import React from "react"
import renderer from "react-test-renderer"
import FooterLink from "./footer-link"

describe(" FooterLink", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <FooterLink hoverColor="text-white" href="#">
          Something
        </FooterLink>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
