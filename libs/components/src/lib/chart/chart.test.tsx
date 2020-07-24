import React from "react"
import { render } from "@testing-library/react"
// Required for jest, see https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
import "../../../../../__mocks__/matchMedia"
import Chart from "./chart"

describe(" Chart", () => {
  it("should render successfully", () => {
    const data = []

    const { baseElement } = render(<Chart data={data}></Chart>)
    expect(baseElement).toBeTruthy()
  })
})
