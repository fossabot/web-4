import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Footer from "./footer"

describe(" Footer", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Footer bgColor={"bg-gray-900"} primaryText={"text-white"} secondaryText={"text-gray-200"} />,
    )
    expect(baseElement).toBeTruthy()
  })

  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer bgColor={"bg-gray-900"} primaryText={"text-white"} secondaryText={"text-gray-200"} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
