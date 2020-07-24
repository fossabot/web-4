describe("components: Navbar component", () => {
  beforeEach(() => cy.visit("/iframe.html?id=navbar--primary"));

  it("should render the component", () => {
    cy.get("div").should("contain", "Perfolio");
  });
});
