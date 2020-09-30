context('Landing page', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3001/')
    })

    it('should open', ()=>{
        cy.get('.App-header').should('exist')
    })

    it('should have ultimateqa.com in the href', ()=>{
        cy.visit('http://localhost:3001/')
        cy.get('.App-link').should('have.attr', 'href')
            .and('include', 'www.ultimateqa.com')
    })
})

