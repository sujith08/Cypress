/// <reference types="cypress" />

describe('MyTestSuite', function() {

    it('Navigations Test', function() {

        cy.visit('https://www.flipkart.com/')
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.get('.xtXmba').contains('Mobiles').click({force: true})
        cy.title().should('eq','Mobile Phones Big Diwali Sale 23dew F23 Store Online - Buy Mobile Phones Big Diwali Sale 23dew F23 Online at Best Price in India | Flipkart.com')

        cy.go('back')
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.go('forward')
        cy.title().should('eq','Mobile Phones Big Diwali Sale 23dew F23 Store Online - Buy Mobile Phones Big Diwali Sale 23dew F23 Online at Best Price in India | Flipkart.com')

        cy.go(-1) // Back
        cy.title().should('eq','Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        cy.go(1) //Forward
        cy.title().should('eq','Mobile Phones Big Diwali Sale 23dew F23 Store Online - Buy Mobile Phones Big Diwali Sale 23dew F23 Online at Best Price in India | Flipkart.com')

        cy.reload()
    })
    
});