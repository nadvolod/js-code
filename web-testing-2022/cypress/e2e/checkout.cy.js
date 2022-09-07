/// <reference types="cypress" />

import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';

describe('Checkout', () => {
    beforeEach(() => {
        // Go to the domain and set the storage
        //   cy.visit('/', {
        //       onBeforeLoad: function(contentWindow){
        //         contentWindow.sessionStorage.setItem('session-username', 'standard_user');
        //     },
        // })
        console.log(cy.window.sessionStorage);
        cy.window.sessionStorage.setItem('session-username', 'standard_user');
        // window.sessionStorage.setItem('session-username', 'standard_user');
        // window.sessionStorage.setItem('cart-contents', '[0]');
        cy.visit('/inventory.html');
        // Now got to the page
    });

    it('should validate that we can continue shopping', () => {
        CheckoutSummaryPage.finishCheckout();
        CheckoutCompletePage.screen.should('be.visible');
    });

    it('should validate that we can cancel checkout and go to the inventory page', () => {
        CheckoutSummaryPage.cancelCheckout();
        SwagOverviewPage.screen.should('be.visible');
    });

    it('should validate that we have 1 product in our checkout overview', () => {
        CheckoutSummaryPage.items.should('have.length', 1);
    });
});