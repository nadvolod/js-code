/// <reference types="cypress" />

describe("visual tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("body").should("be.visible");
  });

  it("display the home page correctly", () => {
    cy.get("body").happoScreenshot();
  });
});
