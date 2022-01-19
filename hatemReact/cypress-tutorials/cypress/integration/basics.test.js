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
            // cy.get('.header-1.main')
            // cy.get('.list1.web')
            // cy.get('.course-list > .list1')
            // cy.get('.course-list').children('.list1')
            // cy.get('li').first()
            // cy.get('li').last()
            // cy.get('li').eq(21)
            // cy.get('li').filter('.mobile')
            // cy.get('li').filter('.web')

            // cy.get('.list1.web').nextAll()

            // cy.contains('Selenium')
            // cy.get('[attribute="value"]')
            cy.get('[data-cy="selenium-course"]')
            cy.get('.list3', {timeout:30000})


        })
        /**
         * Automation = Find elements + actions + Assertions.
         */
})
 