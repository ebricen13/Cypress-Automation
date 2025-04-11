/// <reference types = "cypress"/>

context('Window' , () => {

    it('Database Interaction' , () => {

        cy.sqlServer("select * from People").then(function(result) 
        {
            
            console.log(result[1][3])

        })

    })
})