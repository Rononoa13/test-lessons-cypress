describe("Test all the todos using API", () => {

    let id;
    //add
    //GET
    //Update
    //Delete

    it('Should add a todo correctly using the API', () => {
        cy.request(
            {
                method: "POST",
                url: "http://localhost:8080/todos",
                body: {
                    "name": "todo1",
                    "isComplete": false
                }
            }).then(response => {
                id = response.body.id
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq('todo1')
            })
    })

    it('Should get a specific todos correctly', () => {
        cy.request('GET', 'http://localhost:8080/todos/' + id).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq('todo1')
        })
    })

    it('Should update the status of a todos correctly', () => {
        cy.request(
            {
                method: "POST",
                url: "http://localhost:8080/todos",
                body: {
                    "name": "todo1",
                    "isComplete": true
                }
            }).then(response => {
                expect(response.body.isComplete).to.eq(true)
            })
    })

    it('Should delete a todos correctly', () => {
        cy.request('DELETE', 'http://localhost:8080/todos/' + id).then(response => {
            expect(response.status).to.eq(200)
        })
    })

})