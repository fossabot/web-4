describe("research", () => {
  beforeEach(() => cy.visit("/"))

  it("should display header message", () => {
    // Custom command example, see `../support/commands.ts` file
    cy.contains("to enrich your research")
  })
})
