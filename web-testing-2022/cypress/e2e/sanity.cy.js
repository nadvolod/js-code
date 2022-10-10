/// <reference types="cypress" />

describe('Solution', () => {
  it('loads', () => {
    cy.visit('/');
    cy.get('.App-link').should('be.visible');
  });
});
