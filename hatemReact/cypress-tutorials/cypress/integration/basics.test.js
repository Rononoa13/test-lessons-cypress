/// <reference types="cypress" />

describe("Login Feature Test", () => {

        it("should visit the login page correctly on ", () => {
            cy.visit("cypress/index.html")
            cy.get('.header-1.main')
            cy.get('.list1.web')
            cy.get('.course-list > .list1')
            cy.get('.course-list').children('.list1')
            cy.get('li').first()
            cy.get('li').last()
            cy.get('li').eq(21)
            cy.get('li').filter('.mobile')
            cy.get('li').filter('.web')


        })
        /**
         * Automation = Find elements + actions + Assertions.
         */
})
 