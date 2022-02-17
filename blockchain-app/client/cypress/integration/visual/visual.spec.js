/// <reference types="cypress" />

describe('blockchain app', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('displays the home page correctly', () => {
		cy.get('body').happoScreenshot();
	});

	it('displays the hamburger menu', () => {
		cy.get('[data-testid="hamburger-menu"]')
			.click()
			.happoScreenshot({
				component: 'hamburger-menu',
				targets: ['safari-iphone-12-pro'],
			});
	});
});
