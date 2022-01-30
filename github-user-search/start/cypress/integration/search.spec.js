/// <reference types="cypress" />

describe('search page', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('performs search w/ valid user', () => {
		const typedText = 'nadvolod';
		cy.get('[data-testid="search-bar"]')
			.type(typedText)
			.should('have.value', typedText);

		cy.get('[data-testid="rate-limit"]').then(($count) => {
			const requestsLimit = $count.text();
			cy.get('form').submit();

			cy.get('[data-testid="rate-limit"]').should(($requestsRemaining) => {
				expect($requestsRemaining.text()).not.to.eq(requestsLimit);
			});
		});
	});

	it('performs search w/ invalid user', () => {
		const typedText = '674foo987';
		cy.get('[data-testid="search-bar"]')
			.type(typedText)
			.should('have.value', typedText);

		cy.get('[data-testid="rate-limit"]').then(($count) => {
			const requestsLimit = $count.text();
			cy.get('form').submit();

			cy.get('[data-testid="rate-limit"]').should(($requestsRemaining) => {
				expect($requestsRemaining.text()).not.to.eq(requestsLimit);
			});
		});
	});
});
