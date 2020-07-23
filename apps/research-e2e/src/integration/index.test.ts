describe("research", () => {
  beforeEach(() => cy.visit("/"))

  it("should display header message", () => {
    cy.contains("Enrich your research with Factor returns")
  })
})
