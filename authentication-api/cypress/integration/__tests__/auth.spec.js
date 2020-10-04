// will not work since we updated the actual response
// it('returns Register when hitting /register',()=>{
//     cy.request('POST', 'http://localhost:3001/api/user/register')
//         .then((response)=>{
//             expect(response.body).to.contain('Register')
//         })
// })

it('throws error if request isnt valid', ()=>{
        cy.request('POST', 'http://localhost:3001/api/user/register')
            .then((response)=>{
                expect(response.status).to.be('400')
        })
})

it('returns 200 for valid request', ()=>{
    let body = {
        name: 'test',
        email: 'test@test.com',
        password: 'Test123'
    }
    cy.request('POST', 'http://localhost:3001/api/user/register', body)
        .then((response)=>{
                expect(response.status).to.eq(200)
        })
})
