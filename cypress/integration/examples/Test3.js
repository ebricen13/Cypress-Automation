/// <reference types = "cypress"/>

describe('My First Test Suite', function() {

    it('My Third Test Case', function() {
        cy.visit(Cypress.env('url') + "/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value' , 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        // Static dropdowns
        cy.get('select').select('option2').should('have.value' , 'option2')

        // Dynamic dropdowns
        cy.get('#autocomplete').type('cos')

        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text() === "Costa Rica") {

                cy.wrap($el).click()
            }

        })
        // Autocomplete
        cy.get('#autocomplete').should('have.value' , 'Costa Rica')

        // Visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // Radio button
        cy.get('[value="radio2"]').check().should('be.checked')

    })

})