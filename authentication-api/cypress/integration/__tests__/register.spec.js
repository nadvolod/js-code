describe('/user/register', ()=>{
    let validUser = {
        name: 'Nikolay',
        email: 'test@test.com',
        password: 'Test123'
    }
    let boundaryValueUser = {
        name: '12345',
        email: 'notAnEmail',
        password: 'abcde'
    }
    const registerEndpoint = 'http://localhost:3001/api/user/register';

    it('returns 200 for valid request', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.status).to.eq(200)
            })
    })

    it('POST with valid user returns correct name', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.body.name).to.eq('Nikolay')
            })
    })

    it('POST with valid user returns correct email', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.body.email).to.eq('test@test.com')
            })
    })
    it('POST with valid user returns correct password', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.body.password).to.eq('Test123')
            })
    })
    it('POST with bad user throws 400', ()=>{
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: boundaryValueUser
        }).then((response)=>{
                expect(response.status).to.eq(400)
            })
    })
    it('POST with short name shows error message', ()=>{
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: boundaryValueUser
        }).then((response)=>{
            expect(response.body).to.eq(`"name" length must be at least 6 characters long`)
        })
    })
    it('POST with not an email shows error message', ()=>{
        let boundaryValueUser = {
            name: 'Nikolay',
            email: 'notAnEmail',
            password: 'Abc1234'
        }
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: boundaryValueUser
        }).then((response)=>{
            expect(response.body).to.eq(`"email" must be a valid email`)
        })
    })
    it('POST with short password shows error message', ()=>{
        let boundaryValueUser = {
            name: 'Nikolay',
            email: 'nikolay@gmail.com',
            password: '1'
        }
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: boundaryValueUser
        }).then((response)=>{
            expect(response.body).to.eq(`"password" length must be at least 6 characters long`)
        })
    })
})
