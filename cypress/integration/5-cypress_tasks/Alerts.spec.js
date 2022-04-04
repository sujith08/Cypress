/// <reference types="cypress" />

describe('UI Elements', function()
 {
    it('Validate Alerts', function()
     {
      cy.visit('http://demo.automationtesting.in/Alerts.html')

      cy.get('[onclick="alertbox()"]').click()

      cy.on('window:alert',(str) =>
{
      expect(str).to.equal('I am an alert box!')
}) 
    })
});
