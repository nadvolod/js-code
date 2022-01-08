/// <reference types="cypress" />

describe("Dashboard", () => {
  it("redirects unauthenticated user to /login", () => {
    cy.visit("");
    cy.url().should("contain", "/login");
  });
});
