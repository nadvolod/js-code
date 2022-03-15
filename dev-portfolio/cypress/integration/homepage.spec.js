/// <reference types="cypress" />

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("have correct social links", () => {
    cy.lighthouse({
      accessibility: 77,
      "best-practices": 87,
      seo: 75,
      pwa: 20,
      performance: 31,
    });
  });
});
