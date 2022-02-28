/// <reference types="cypress" />

describe("The home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("audits the home page", () => {
    cy.lighthouse({
      accessibility: 79,
      "best-practices": 87,
      seo: 75,
      pwa: 20,
      performance: 30,
    });
  });
});
