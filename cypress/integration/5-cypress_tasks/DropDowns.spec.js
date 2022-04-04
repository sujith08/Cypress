/// <reference types="cypress" />

describe('UI Elements', function()
 {
    it('Validate Drop Down', function()
     {
      cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')
      cy.url().should('include','automation')

      cy.get('[name=continents]').select('Australia').should('have.value','Australia')

    })
});