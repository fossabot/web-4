import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import FooterLink from "./footer-link"

describe(" FooterLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <FooterLink hoverColor="text-white" href="#">
        Something
      </FooterLink>,
    )
    expect(baseElement).toBeTruthy()
  })

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
