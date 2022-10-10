/// <reference types="cypress" />

describe('Exercise', () => {
  it('loads', () => {
    /** Your code below */

    //1. Use cy.visit('/') to go to the app url
    //2. Use cy.get('.App-link').should('be.visible') to assert valid state

    /** Your code above */
  });

  it('link goes to ultimateqa', () => {
    /** Your code below */
    // Don't change this line, but make the test pass!
    cy.get('.App-link').should('have.attr', 'href').and('equal', 'https://www.ultimateqa.com');
    /** Your code above */
  });

  it('link should open in a new tab', () => {
    /** Your code below */

    /** Your code above */
  });
});
