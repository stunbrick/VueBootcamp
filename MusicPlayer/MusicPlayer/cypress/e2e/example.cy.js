// https://on.cypress.io/api

describe('Sanity', () => {
  it('visits the app root url', () => {
    cy.visit("/");
    cy.get("h1").should('exist');
  })
})
