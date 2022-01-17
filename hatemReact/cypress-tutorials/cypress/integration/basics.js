/// <reference types="cypress" />

describe("Login Feature Test", () => {
    // cy.visit('https://example.cypress.io')
    // cy.visit('https://localhost:3000')
    // cy.visit('cypress/index.html')
    ["iphone-x", "macbook-16"].forEach(size => {
        it("should visit the login page correctly on " + size, () => {
            cy.viewport(size)
            cy.visit('/')
        })

    })
})
