/// <reference types="Cypress"/>


describe('Request commad suite', () => {
    it('Get Request', ()=> {
        cy.request({
            method: 'GET',
            url:'http://localhost:8080/todos',
            qs:{"id":3042} 
        }).then(response => {
            // cy.log(response.headers)
            // cy.log(response.status)
            // cy.log(response.statusText)
            // cy.log(response.duration)
            // cy.log(response.body)
            expect(response.status).to.be.eq(200)
            expect(response.duration).to.be.below(2000)
            expect(response.body[0].isComplete).to.be.false
        })
    })


    // it("Post Request", () => {
    //     cy.request(
    //         'POST',
    //         'http://localhost:8080/todos',
    //         {
    //             "name": "vOK lAGYO",
    //             "isComplete": true
    //         }    
    //     ).then(response => {
    //         expect(response.status).to.be.eq(201)
    //     })
    // })

    it("Put Request", () => {
        cy.request('PUT','http://localhost:8080/todos/55',
        {
            "name": "vOK lAGYO",
            "isComplete": true
        } 
        )
    })

    // it("Delete Request", () => {
    //     cy.request('DELETE','http://localhost:8080/todos/3')
    // })

    it.only("Secure API", () => {
        cy.request(
            {
                method: 'GET',
                url: 'http://localhost:8080/courses',
                // auth:{
                //     bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2NDI3NTY1NDYsImV4cCI6MTY0Mjc2MDE0Niwic3ViIjoiNSJ9.ouVmKB9YN6dyqF9O8hrEc8nuP-AiusfcDpLwuzdPWsY'
                // } 
                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2NDI3NTY1NDYsImV4cCI6MTY0Mjc2MDE0Niwic3ViIjoiNSJ9.ouVmKB9YN6dyqF9O8hrEc8nuP-AiusfcDpLwuzdPWsY"
                }
            })
    })
} )