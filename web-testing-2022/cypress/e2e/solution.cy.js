/// <reference types="cypress" />

describe('Solution', () => {
  it('loads', () => {
    cy.visit('/');
    cy.get('.App-link').should('be.visible');
  });

  it('link goes to ultimateqa', () => {
    cy.visit('/');
    cy.get('.App-link')
      .should('have.attr', 'href')
      .and('equal', 'https://www.ultimateqa.com');
  });

  it('should open link in new tab', () => {
    cy.visit('/');
    cy.get('.App-link').should('have.attr', 'target').and('equal', '_blank');
  });
});
