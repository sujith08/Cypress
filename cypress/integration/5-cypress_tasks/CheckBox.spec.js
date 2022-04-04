/// <reference types="cypress" />

describe('UI Elements', function()
 {
    it('Validate Check Boxes', function()
     {
      cy.visit('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm')
      cy.url().should('include','automation')

      //CheckBoxes - selecting all the check boxes
      cy.get('input[value="Manual Tester"]').check().should('be.checked')
      cy.get('input[value="Automation Tester"]').check().should('be.checked')

      //CheckBoxes - selecting all the check boxes
      cy.get('input[value="Manual Tester"]').uncheck().should('not.be.checked')
      cy.get('input[value="Automation Tester"]').uncheck().should('not.be.checked')

      //CheckBoxes - selecting the particular check boxes
      cy.get('[type=checkbox]').check(['Automation Tester'])

    })
});