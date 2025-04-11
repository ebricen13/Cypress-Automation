/// <reference types = "cypress"/>

describe('Handling Child Windows', function() 
{

    it('My first test case' , function() {    

        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        cy.get('#opentab').then(function(el)
            {
                const url = el.prop('href')
                cy.visit(url)//qaclickacademy.com
                cy.origin(url , () =>
                {
                    cy.get('div.sub-menu-bar [href="about.html"]').click()
                })
            })
    })

})