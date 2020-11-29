describe('/api/posts', ()=>{
    let validUserExistsInDB = {
        email: 'hardcoded@test.com',
        password: 'Test123'
    }
    const endpoint = 'http://localhost:3001/api/posts';

    it('returns 401 without auth token', ()=>{
        cy.request({
            method: 'GET',
            url: endpoint,
            failOnStatusCode: false,
            body: validUserExistsInDB
        }).then((response)=>{
            expect(response.status).to.eq(401)
        })
    });

    //TODO can't figure out how to retrieve the response body with an auth
    //token that I can then pass to the /posts request
    it('returns 200 with auth token', ()=>{
        let responseBody = '';
        cy.request({
            method: 'POST',
            url: 'http://localhost:3001/api/user/login',
            body: validUserExistsInDB
        }).then((response)=>{
            responseBody = response;
            cy.log(responseBody.body);
        })

        cy.request({
            url: 'http://localhost:3001/api/posts',
            body: validUserExistsInDB,
            method: 'GET',
            headers: {
                'auth-token' : responseBody
            }
        }).then((response)=>{
            expect(response.status).to.eq(200);
        })
    })
})
