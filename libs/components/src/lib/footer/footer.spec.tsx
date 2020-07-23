import React from "react"
import { render } from "@testing-library/react"

import Footer from "./footer"

describe(" Footer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Footer bgColor={"bg-gray-900"} primaryText={"text-white"} secondaryText={"text-gray-200"} />,
    )
    expect(baseElement).toBeTruthy()
  })
})
