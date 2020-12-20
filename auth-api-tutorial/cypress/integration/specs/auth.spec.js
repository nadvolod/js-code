it('/register creates user', ()=> {
    let body = {
        name: 'TestName',
        email: 'foo@bar.com',
        password: 'Test0987'
    }
    //cypress assertions
    cy.request('POST', 'http://localhost:3000/api/user/register', body)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq('TestName');
            expect(response.body.email).to.eq('foo@bar.com');
            expect(response.body.password).to.eq('Test0987');
        })
})

it('returns 400 when we hit /register with no body', ()=> {
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/api/user/register',
        failOnStatusCode: false
    }).then((response) => {
            expect(response.status).to.eq(400);
        })
})