describe("To Test The Flipkart Application", function () {
  
    it("Verify title of the page", function () 
    {

    cy.visit("https://www.flipkart.com/")

    cy.title().should("eq","Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!");

    });

  });
  