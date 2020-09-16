context('Testing links the right way',()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3001/');
    })

    it('should open app',()=>{
        cy.get('#main-image').should('exist');
    })

//clicking a link is actually a pointless activity
// it('should click link',()=>{
//     cy.visit('http://localhost:3001/');
//     cy.get('.App-link').click().url().should('contain','ultimateqa.com');
// })

    it('should validate link is correct', () => {
        cy.get('.App-link').should('have.attr', 'href')
            .and('include','www.ultimateqa.com')
    });
    it('should validate link opens in tab', () => {
        cy.get('.App-link').should('have.attr', 'target')
            .and('equal','_blank')
    });
})

