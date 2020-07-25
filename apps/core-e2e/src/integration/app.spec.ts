import { getGreeting } from "../support/app.po"

describe("core", () => {
  beforeEach(() => cy.visit("/"))

  it("should display welcome message", () => {
    cy.contains("Why was this")
    cy.contains("great again?")
  })
})
