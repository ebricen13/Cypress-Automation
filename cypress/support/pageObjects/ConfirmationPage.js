class ConfirmationPage {

    submitFormDetails() {

        cy.submitFormDetails()
        // cy.get("#country").type("India")
        // //cy.wait(2000)
        // cy.get(".suggestions ul li a").click()
        // cy.get(".btn-success").click()

    }

    getAlertMessage() {
        
        return cy.get(".alert-success")
    }
}

export default ConfirmationPage;