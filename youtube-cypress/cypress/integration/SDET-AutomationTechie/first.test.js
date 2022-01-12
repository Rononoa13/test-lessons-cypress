/// <reference types="cypress" />

describe('Positive Test', () => {
    it('Does not do much!', () => {
      cy.visit('https://demo.nopcommerce.com/');
      cy.title().should('equals', 'nopCommerce demo store')
    })

    it('Negative Test', () => {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq', 'nopCommerce store')
      })
  })