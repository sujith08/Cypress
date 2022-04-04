/// <reference types="cypress" />

describe("Login Test", () => {
    it("should login with correct credentials", function () {
        cy.visit("https://www.amazon.in/");
        cy.get('#twotabsearchtextbox').type('Chocolates')
        cy.get('#nav-search-submit-button').click()
        cy.title().should('include', 'Amazon.in : Chocolates')
        cy.get('Cadbury Dairy Milk Silk Chocolate Bar, 150 g').click()
    });
    
});
