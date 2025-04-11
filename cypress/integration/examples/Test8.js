/// <reference types = "cypress"/>

describe('Handling Child Windows', function() {

    it('Mouse hover', function() {    

        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        // cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force:true })
        cy.url().should('include' , 'top')
    })

})