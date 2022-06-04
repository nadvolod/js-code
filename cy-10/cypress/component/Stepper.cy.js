import Stepper from "./Stepper";

describe("<Stepper>", () => {
  // Set up some constants for the selectors
  const stepperSelector = "[data-testid=stepper]";
  const incrementSelector = "[aria-label=increment]";
  const decrementSelector = "[aria-label=decrement]";

  it("stepper should default to 0", () => {
    // Arrange
    cy.mount(<Stepper />);
    // Assert
    cy.get(stepperSelector).should("contain.text", 0);
  });

  it('supports an "initial" prop to set the value', () => {
    // Arrange
    cy.mount(<Stepper initial={100} />);
    // Assert
    cy.get(stepperSelector).should("contain.text", 100);
  });
});
