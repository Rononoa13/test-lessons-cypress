/// <reference types="cypress" />

describe('My first test suite', function () {

    it('Visit Codenbox automation site', () => {
        cy.visit('https://codenboxautomationlab.com/practice/')

        //Static dropdown
        cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
        
        // Dynamic Dropdown
        cy.get('#autocomplete').type('us')
        cy.get('.ui-menu-item').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Brunei Darussalam') {
              // wrap this element so we can
              // use cypress commands on it             
              cy.wrap($el).click()
            }
          })
            
        })
})