/// <reference types="cypress" />

describe('UI Elements', function()
 {
    it('Validate Radio Buttons', function()
     {
      cy.visit('http://demo.automationtesting.in/Register.html')
      cy.url().should('include','automation')

      //RadioButtons   
      cy.get('input[value=Male]').should('be.visible').should('not.be.checked').click().should('be.checked')
      cy.get('input[value=FeMale]').should('be.visible').should('not.be.checked').click().should('be.checked')

    })
});