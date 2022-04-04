/// <reference types="cypress" />

describe('Validating The Flipkart Application', function ()
 { 
     it('Verifying The Chocolates',function() {

     cy.visit("https://www.flipkart.com/") //Visiting The Flipkart Website

     cy.get('._3704LK').type("chocolates") //Searching Chocolates In Search Box

     cy.get('[type="submit"]').click() //Clicking Submit Button

     cy.title().should('eq','Chocolates- Buy Products Online at Best Price in India - All Categories | Flipkart.com') //Verifying The Chocolates title

     cy.get('.s1Q9rs[title="Cadbury Celebrations Bars"]').click() //Clicking The Product

     cy.get('div._2c7YLP.UtUXW0._6t1WkM._3HqJxg div._1YokD2._2GoDe3 div._1YokD2._3Mn1Gg.col-5-12._78xt5Y:nth-child(1) div._1AtVbE.col-12-12:nth-child(2) div._1p3MFP.dTTu2M ul.row li.col.col-6-12:nth-child(1) > button._2KpZ6l._2U9uOA._3v1-ww').click() //Clicking Add To Cart Button

     cy.title().should('eq','Shopping Cart | Flipkart.com') //Verifying The Chocolates title

     });

});