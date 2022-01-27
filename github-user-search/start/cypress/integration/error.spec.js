/// <reference types="cypress" />

describe('error page', () => {
	beforeEach(() => {
		cy.visit('/5678');
	});

	it('displays two todo items by default', () => {
		cy.get('[data-testid="back-home"]')
			.should('have.attr', 'href')
			.and('eq', '/');
	});
});
