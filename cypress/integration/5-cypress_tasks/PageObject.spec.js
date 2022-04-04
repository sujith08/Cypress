/// <reference types="cypress" />

import SamplePage from '../pageobjects/SamplePage'

describe('Test Suite', function () {

    it('Validation Of SamplePage', function () {
        const sp = new SamplePage()
        sp.visit()
        sp.fillEmail('demo')
        sp.fillPassword('demo')
        sp.submit()
        cy.title().should('be.equal','Dashboard')
    })
})

