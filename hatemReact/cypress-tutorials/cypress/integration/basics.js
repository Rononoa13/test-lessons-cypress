/// <reference types="cypress" />

describe("Login Feature Test", () => {

    //Hooks

    before(function() {
        cy.log("Run the server locally") 
    })

    after(function(){
        cy.log("Kill the server")
    })

    beforeEach(function() {
        cy.log("Navigate to login page")
    })

    it("should visit the login page correctly", () => {
        
        cy.log("testcase1: should visit the website correctly ")
        
    })

    it("should be able to login", () => {
        
        cy.log("FIll the username and the password and login")
        cy.log("should navigate the login page")
        
    })
})
