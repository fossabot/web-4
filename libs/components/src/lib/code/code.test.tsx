import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Code from "./code"

describe("Code", () => {
  const component = <Code code={[{ language: "javascript", snippet: "const x = 1;" }]} />

  it.skip("should render successfully", () => {
    const { baseElement } = render(component)
    expect(baseElement).toBeTruthy()
  })

  it("renders correctly", () => {
    const tree = renderer.create(component).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
