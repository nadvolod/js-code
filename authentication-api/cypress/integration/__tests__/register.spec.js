const Guid = require('guid');

describe('/user/register', ()=>{
    let validUser = {}
    let negativeUser = {
        name: '12345',
        email: 'notAnEmail',
        password: 'abcde'
    }
    const registerEndpoint = 'http://localhost:3001/api/user/register';

    beforeEach(() => {
        validUser = {
            name: 'Nikolay',
            email: Guid.raw() + '@test.com',
            password: 'Test123'
        }
    })

    it('returns 200 for valid request', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.status).to.eq(200)
            })
    })

    it('with valid user returns correct name', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.body.name).to.eq('Nikolay')
            })
    })

    it('with valid user returns correct email', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.body.email).to.eq(validUser.email)
            })
    })

    it('with valid user hashes the password', ()=>{
        cy.request('POST', registerEndpoint, validUser)
            .then((response)=>{
                expect(response.body.password).to.not.eq(validUser.email)
            })
    })

    it('with bad user throws 400', ()=>{
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: negativeUser
        }).then((response)=>{
                expect(response.status).to.eq(400)
            })
    })
    it('with short name shows error message', ()=>{
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: negativeUser
        }).then((response)=>{
            expect(response.body).to.eq(`"name" length must be at least 6 characters long`)
        })
    })
    it('with invalid email shows error message', ()=>{
        negativeUser.name = 'firstName';
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: negativeUser
        }).then((response)=>{
            expect(response.body).to.eq(`"email" must be a valid email`)
        })
    })
    it('with short password shows error message', ()=>{
        negativeUser.password = '1';
        negativeUser.name = 'validName';
        negativeUser.email = 'valid@email.com';
        cy.request({
            method: 'POST',
            url: registerEndpoint,
            failOnStatusCode: false,
            body: negativeUser
        }).then((response)=>{
            expect(response.body).to.eq(`"password" length must be at least 6 characters long`)
        })
    })
})
