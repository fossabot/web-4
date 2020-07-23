import React from "react"
import { render } from "@testing-library/react"

import TeamCard from "./team-card"

describe(" TeamCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TeamCard />)
    expect(baseElement).toBeTruthy()
  })
})
