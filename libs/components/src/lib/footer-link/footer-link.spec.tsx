import React from "react"
import { render } from "@testing-library/react"

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
})
