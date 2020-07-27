import React from "react"
import renderer from "react-test-renderer"
import TeamCard from "./team-card"

describe(" TeamCard", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <TeamCard
          name="Nicolas Webersinke"
          position="Very important"
          description="Does very important stuff"
          image="https://via.placeholder.com/150"
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
