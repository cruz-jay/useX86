/* global describe, it, cy */

describe("Quiz App - Basic Flow", () => {
  it("Loads the homepage", () => {
    cy.visit("/");
    cy.contains("Let's Start");
  });
  it("Starts quiz", () => {
    cy.visit("/");
    cy.contains("Let's Start").click();
    cy.get("#questions").should("exist");
  });
  it("User to select an option", () => {
    cy.visit("/");
    cy.get("#option").first().click();
    cy.get("#next-btn").click();
  });
});
