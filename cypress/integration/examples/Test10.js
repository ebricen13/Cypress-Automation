/// <reference types = "cypress"/>
/// <reference types = "cypress-iframe"/>
import 'cypress-iframe'

describe('Frames Test', function() 
{

    it('Demo example' , function() {    

        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']").should('have.length' , 2)
    })

})