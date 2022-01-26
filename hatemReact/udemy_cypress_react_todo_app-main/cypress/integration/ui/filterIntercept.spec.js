describe('first', () => {
    /**
     * cy.intercept command
     * To have access to all the network calls
     * Have access to all the API requests
     * Validation on the request body
     * Mock the server
     * Send the requests to cypress server
     */
    describe('Filter functionality test cases.', () => {


        before(() => {

            cy.intercept({
                method: 'GET',
                url: 'http://localhost/8080/todos'
            }, {
                body: [
                    {
                        "name": "Learn Cypress",
                        "isComplete": false
                    },
                    {
                        "name": "Build Framework",
                        "isComplete": false
                    },
                    {
                        "name": "Another one",
                        "isComplete": true
                    },
                    {
                        "name": "Hatem ...",
                        "isComplete": false
                    },
                    {
                        "name": "Drink Coffee",
                        "isComplete": true
                    }]
            })
            cy.visit('/')

        })

        it("should filter the completed todos correctly", () => {
            cy.contains('Complete').click()
            cy.url().should('contain', '/complete')
            cy.get('.todo-checkbox').each(element => {
                cy.wrap(element).should('be.checked')
            })
        })

        it("should filter the Active todos correctly", () => {
            cy.contains('Active').click()
            cy.url().should('contain', '/active')
            cy.get('.todo-checkbox').each(element => {
                cy.wrap(element).should('not.be.checked')
            })
        })

        after(() => {
            cy.get('body').then($el => {
                if ($el.find('.delete-item').length > 0) {
                    cy.get('.delete-item > a').click({ multiple: true })
                }
            })

        })
    })
        ;
});
