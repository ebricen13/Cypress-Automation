/// <reference types = "cypress"/>

describe('Handling Child Windows', function() {

    it('Should handle child windows', function() {

        cy.visit(Cypress.env('url') + "/seleniumPractise/#/")
        cy.get('[href="#/offers"]').invoke('removeAttr' , 'target').click()
        cy.get('#page-menu').select('20').should('have.value' , '20')

    })

})