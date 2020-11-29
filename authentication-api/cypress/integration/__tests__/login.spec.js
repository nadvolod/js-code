describe('/user/login', ()=>{
    let validUserExistsInDB = {
        email: 'hardcoded@test.com',
        password: 'Test123'
    }
    const endpoint = 'http://localhost:3001/api/user/login';

    it('returns 200 for valid user login', ()=>{
        cy.request('POST', endpoint, validUserExistsInDB)
            .then((response)=>{
                expect(response.status).to.eq(200)
            })
    })

    it('returns error message for invalid email', ()=>{
        let user = {
            email: 'doesnt@exist.com',
            password: validUserExistsInDB.password
        }

        cy.request({
            method: 'POST',
            url: endpoint,
            failOnStatusCode: false,
            body: user
        }).then((response)=>{
                expect(response.status).to.eq(400)
            })
    })

    it('returns error message for invalid password', ()=>{
        let user = {
            email: validUserExistsInDB.email,
            password: 'BAAAAD'
        }

        cy.request({
            method: 'POST',
            url: endpoint,
            failOnStatusCode: false,
            body: user
        }).then((response)=>{
                expect(response.status).to.eq(400)
            })
    })
})
