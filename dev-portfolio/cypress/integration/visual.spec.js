/// <reference types="cypress" />

describe("visual tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("display the home page correctly", () => {
    cy.get("body").happoScreenshot();
  });
});
