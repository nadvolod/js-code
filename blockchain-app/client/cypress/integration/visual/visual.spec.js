/// <reference types="cypress" />

describe('blockchain app', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('displays the home page correctly', () => {
		cy.get('body').happoScreenshot();
	});

	it('displays correct hamburger menu', () => {
		cy.viewport('samsung-s10');
		cy.get('[data-testid="hamburger-menu"]').click();
		cy.get('[data-testid="mobile-menu-open"]').happoScreenshot({
			component: 'hamburger-menu',
			targets: ['chrome-galaxy-s10'],
		});
	});
});
