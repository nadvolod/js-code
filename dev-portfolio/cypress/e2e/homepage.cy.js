/// <reference types="cypress" />

describe('Homepage', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('has maintained lighthouse metrics', () => {
        cy.lighthouse({
            accessibility: 77,
            'best-practices': 87,
            seo: 75,
            pwa: 20,
            performance: 30,
        })
    })
})
