/// <reference types="Cypress"/>


describe('Todo UI testing', () => {

    beforeEach(()=>{
        cy.visit("/")
    })


    it('should add a new todo correctly', () =>  {
        cy.addNewTodo("First Todo")
        cy.get('.todo-item').last().should('contain.text', 'First Todo')
    }) 

    it('should be able to toggle the status of a todo correctly', () => {
        cy.addNewTodo("Second Todo")
        cy.get('.todo-checkbox').check().should('be.checked')
        cy.get('.todo-checkbox').uncheck().should('not.be.checked')
    })

    it('should delete a todo correctly', () =>  {
        cy.addNewTodo("Third Todo")
        cy.get('.delete-item').click()
    })

    it('should not add empty todos', () => {
        cy.addNewTodo("")
    })


    afterEach(() => {
        cy.get('body').then($el => {
            if($el.find('.delete-item').length > 0) {
                cy.get('.delete-item > a').click({multiple:true})
            }
        })
        
    })
})