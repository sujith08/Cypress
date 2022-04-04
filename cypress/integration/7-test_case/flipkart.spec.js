describe("To automate Flipkart app", () => {
  before(() => {
    cy.visit("https://www.flipkart.com/", {
      timeout: 1000,
    });
  });

  it("Verify title of the home page", () => {
    cy.title().should("eq", "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");
  });

  it("Verify title of the home page - partial", () => {
    cy.title().should("include", "Online Shopping Site");
  });
});
