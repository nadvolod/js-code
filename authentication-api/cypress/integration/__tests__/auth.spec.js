it('returns Register when hitting /register',()=>{
    cy.request('POST', 'http://localhost:3001/api/user/register')
        .then((response)=>{
            expect(response.body).to.contain('Register')
        })
})