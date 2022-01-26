describe('Filter functionality test cases.', () => {


    before(()=> {
        cy.visit("/")
        const todoExample = ["First Todo","Second Todo","Third Todo","Fifth Todo","Fifth Todo"].forEach(todo => {
            cy.addNewTodo(todo)
        })
        cy.get('.todo-checkbox').first().check().should('be.checked')
        cy.get('.todo-checkbox').last ().check().should('be.checked')
        
    })

    it("bla", ()=>{

    })
    after(() => {
        cy.get('body').then($el => {
            if($el.find('.delete-item').length > 0) {
                cy.get('.delete-item > a').click({multiple:true})
            }
        })
        
    })
})