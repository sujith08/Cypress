/// <reference types="cypress" />

describe('MyTestSuite',function()
{

    it('Login Test ', function()
     {
        cy.login('demo','demo')
        cy.title().should('be.equal','Dashboard')
    })

    it('Adding The Products ', function()
     {
        cy.login('demo','demo')
        cy.log('Adding New Products')
    })

    it('Deleting The Products ', function()
     {
        cy.login('demo','demo')
        cy.log('Deleting The Products')

    })
});