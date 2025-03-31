// Visit this page (https://example.cypress.io).
 // Query for an element.
 // Interact with that element.
 // Assert about the content on the page.

describe('My First Challenge', () => {
  it('Visits the Cypress Kitchen Sink', () => {
    // visit the page
    cy.visit('https://example.cypress.io')
    // query for an element
    cy.get('.home-list').contains('Actions')
    // interact with that element
    cy.get('.home-list').contains('Querying').click()
    // assert about the content on the page
    cy.url().should('include', '/commands/querying')
    cy.get('h1').should('contain', 'Querying')

  })
})