/// <reference types="cypress" />

describe('The App', () => {
  it('meets performance and accessibility standards', () => {
    const thresholds = {
      performance: 100,
      accessibility: 100,
      seo: 100,
      pwa: 100,
    };

    // https://github.com/GoogleChrome/lighthouse/blob/main/docs/emulation.md
    // const lighthouseConfig = {
    //   formFactor: 'desktop',
    //   screenEmulation: { disabled: true },
    // };

    cy.visit('/');
    cy.lighthouse(thresholds);
  });
});
