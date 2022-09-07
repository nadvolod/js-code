describe('empty spec', () => {
  it('passes', () => {
    // cy.visit('')
    // window.sessionStorage.setItem('session-username', 'standard_user');
    // window.sessionStorage.setItem('cart-contents', '[0]');
    // console.log(window.sessionStorage);
    // cy.reload();
    // // don't want to fail on 404 status codes so we can see the page
    // cy.visit('/inventory.html', {failOnStatusCode: false});

    const login = (name) => {
      cy.session([name], () => {
        cy.visit('/')
        window.sessionStorage.setItem('session-username', name)
        cy.visit('/inventory.html', {failOnStatusCode: false});
      })
    }
    login('standard_user')

    // cy.session(login, () => {
    //   cy.visit('/')
    //   cy.window.sessionStorage.setItem('session-username', 'standard_user')
    //   cy.visit('/inventory.html', {failOnStatusCode: false});
    // })
  })
})