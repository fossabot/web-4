import React from "react"
import { render } from "@testing-library/react"

import Navbar from "./navbar"

describe(" Navbar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Navbar logo={<span>I am a logo</span>} />)
    expect(baseElement).toBeTruthy()
  })
})
