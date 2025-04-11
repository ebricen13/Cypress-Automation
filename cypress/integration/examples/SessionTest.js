/// <reference types="cypress" />

let productName;

describe('JWT Session', () => {
    it('is logged in through local storage', async () => {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client", {
                onBeforeLoad: function (window) {
                    window.localStorage.setItem('token', Cypress.env('token'));
                }
            });
        });

        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text();
        });

        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerlink*='cart']").click()
        cy.wait(10000);
        cy.contains("Checkout").click()
        cy.get("[placeholder*='Country']").type("ind")

        cy.get('.ta-results button').each(($e1) => {
            if ($e1.text() === " India") {
                cy.wrap($e1).click();
            }
        });

        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.contains("CSV").click()

        // Use the task to read and parse the CSV in the Node.js environment
        cy.task('parseCSV', Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_enrique.briceno.csv")
            .then((csv) => {
                console.log(csv);

                const actualProductCSV = csv[0]["Product Name"];
                expect(productName).to.equal(actualProductCSV);
            });
    });
});