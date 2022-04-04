/// <reference types="cypress" />

describe('UI Elements', function () {
    it('Validate Multiple Alerts', function () {
        cy.visit('http://demo.automationtesting.in/Alerts.html')

        cy.get('.analystic').click()

        cy.get('[onclick="confirmbox()"]').click()

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a Button !')
        })
    })
});