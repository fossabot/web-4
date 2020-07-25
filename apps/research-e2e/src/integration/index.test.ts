describe("research", () => {
  beforeEach(() => cy.visit("/"))

  it("should display header message", () => {
    cy.contains("Enhance your research with")
    cy.contains("factor returns")
  })
})
