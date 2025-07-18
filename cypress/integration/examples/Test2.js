/// <reference types = "cypress"/>

describe('My First Test Suite', function() {
    
    it ('My Second Test Case', function() {

        cy.visit(Cypress.env('url') + "/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //in selenium 'get' hit the URL, cypress get acts like findElement of selenium
        
        //parent child chaining
        cy.get('.products').as('productLocator')
        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click() //cy.get('.products button').contains('Place Order').click()
    } )
} )