/// <reference types="cypress" />

describe("Login Feature Test", () => {

    /**
     * next
     * nextAll
     * nextUntil
     * 
     * prev
     * prevAll
     * prevUntil
     */

        it("should visit the login page correctly on ", () => {
            cy.visit("cypress/index.html")
            // cy.get('[data-cy="email"]').type("test@123.com")
            // cy.get('[data-cy="password"]').type("12345")
            // cy.get('[data-cy="check-remember"]').click()
            // cy.get('[data-cy="sign-in"]').click()

            cy.get('[type="radio"]').check()
            cy.wait(4000)
            cy.fixture('example').then(example => {
                cy.log(example)
            })
            // cy.get('[type="radio"]').uncheck()
        })
        /**
         * Automation = Find elements + actions + Assertions.
         */
})
 