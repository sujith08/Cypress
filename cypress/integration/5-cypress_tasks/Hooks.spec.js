/// <reference types="cypress" />

describe('MyTestSuite', function () {
     
    before(function() {
    // runs once before all tests in the block
        cy.log('Setup Block')
    })

    after(function() {
    // runs once after all tests in the block
        cy.log('Tear Down Block')
    })

    beforeEach(function() {
    // runs before each test in the block
        cy.log('Login Block')
    })

    afterEach(function() {
    // runs after each test in the block
        cy.log('Logout Block')
    })

    it('Searching', function() {
        cy.log('Searching Test')
    })

    it('Advanced Searching', function() {
        cy.log('Advanced Searching Test')
    })

    it('Listing Products', function() {
        cy.log('Listing Products Test')
    })

})