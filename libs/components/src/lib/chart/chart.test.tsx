import React from "react"
import renderer from "react-test-renderer"
// Required for jest, see https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
import "../../../../../__mocks__/matchMedia"
import Chart from "./chart"

describe("Chart", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Chart
          data={[
            { time: "01/01/2020", value: 1 },
            { time: "02/01/2020", value: 2 },
          ]}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
