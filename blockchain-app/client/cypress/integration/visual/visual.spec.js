/// <reference types="cypress" />

describe('blockchain app', () => {
	beforeEach(() => {
		cy.visit('');
	});

	it('displays the home page correctly', () => {
		cy.get('body').happoScreenshot();
	});
});
