import React from "react"
import { render } from "@testing-library/react"

import CodeSnippet from "./code-snippet"

describe(" CodeSnippet", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CodeSnippet language="js">"const x = 1;"</CodeSnippet>)
    expect(baseElement).toBeTruthy()
  })
})
