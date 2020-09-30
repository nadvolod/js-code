context('Login page', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('should open application', ()=> {
        cy.title().should('eq', 'Swag Labs')
    })

    it('should login to app', ()=> {
        cy.get('#user-name').type('standard_user')
            .get('#password').type('secret_sauce')
            .get('#login-button').click()
            .get('#inventory_filter_container').should('exist')
    })
})

