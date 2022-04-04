/// <reference types="cypress" />

class SamplePage {

visit() 
{
    cy.visit('https://demo.opencart.com/admin/index.php?route=common/login')
}

fillEmail(value)
{
    const field = cy.get('#input-username')
    field.clear()
    field.type(value)
    return this
}

fillPassword(value)
{
    const field = cy.get('#input-password')
    field.clear()
    field.type(value)
    return this
}

submit()
{
    const button = cy.get('button[type="submit"]')
    button.click()
}
}

export default SamplePage