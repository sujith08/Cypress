/// <reference types="cypress" />

describe('MyTestSuite',function()
{

    before(function()
     {
        cy.fixture('example').then(function(data) {
            this.data=data
    })
})

    it('Fixtures Test ',function()
     {
        cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
        cy.get('#input-username').type(this.data.email) 
        cy.get('#input-password').type(this.data.password)
        cy.get('button[type="submit"]').click()

    })
});