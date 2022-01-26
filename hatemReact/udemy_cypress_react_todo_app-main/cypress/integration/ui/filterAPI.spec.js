describe('Filter functionality test cases.', () => {


    before(() => {

        cy.addAPItodos()
        cy.visit('/')

    })

    it("should filter the completed todos correctly", () => {


        // cy.intercept('route matcher', 'route handler')
        cy.intercept({
            method: '',
            url: ''
        }, {
            body: '',
            statusCode: 500,
            delayMs: 10000,
            forceNetworkError: true
        })

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