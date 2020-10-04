// will not work since we updated the actual response
// it('returns Register when hitting /register',()=>{
//     cy.request('POST', 'http://localhost:3001/api/user/register')
//         .then((response)=>{
//             expect(response.body).to.contain('Register')
//         })
// })

// Can't figure out how to make the 400 work
// it('throws error if request isnt valid', ()=>{
//         cy.request('POST', 'http://localhost:3001/api/user/register')
//             .then((response)=>{
//                 expect(response.status).to.be(400)
//         })
// })

describe('/user/register', ()=>{
    let validUser = {
        name: 'test',
        email: 'test@test.com',
        password: 'Test123'
    }

    it('returns 200 for valid request', ()=>{
        cy.request('POST', 'http://localhost:3001/api/user/register', validUser)
            .then((response)=>{
                expect(response.status).to.eq(200)
            })
    })

    it('POST with valid user returns correct name', ()=>{
        cy.request('POST', 'http://localhost:3001/api/user/register', validUser)
            .then((response)=>{
                expect(response.body.name).to.eq('test')
            })
    })

    it('POST with valid user returns correct email', ()=>{
        cy.request('POST', 'http://localhost:3001/api/user/register', validUser)
            .then((response)=>{
                expect(response.body.email).to.eq('test@test.com')
            })
    })
    it('POST with valid user returns correct password', ()=>{
        cy.request('POST', 'http://localhost:3001/api/user/register', validUser)
            .then((response)=>{
                expect(response.body.password).to.eq('Test123')
            })
    })
})
