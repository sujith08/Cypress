/// <reference types="cypress" />

describe("Login Test", () => {
    it("should login with correct credentials", function () {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.title().should('include', 'OrangeHRM')
    });
});
//it
