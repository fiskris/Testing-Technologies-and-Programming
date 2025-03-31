// // Write a test to:
//     Visit this page (https://example.cypress.io/commands/actions).
//     Query for the email input field.
//     Type your email address.
//     Assert about the content of the input field.

describe('My second Challenge', () => {
    it('Visits the Cypress Kitchen Sink - actions', () => {
    // visit the page
        cy.visit('https://example.cypress.io/commands/actions')
    // assert about the content on the page
   //  cy.url().should('include', '/commands/actions')
    //    cy.get('h1').should('contain', 'Actions')
    // Query for the email input field.
        cy.get('.action-email').type('tester@test.com')
        //2nd solution:
        // cy.get('#email1').type('tester@test.com')
        //other option:
        // cy.get('input[type='email']').type('tester@test.com')
        //other option using alias:
            // cy.get('input[type='email']').as('emailInput')
            //type your email:
            //  const emailAddress = 'tester@test.com';
            // cy.get('@emailInput').type(emailAddress)
    // Assert about the content of the input field. 
        cy.get('.action-email').should('have.value', 'tester@test.com')
            //and with alias:
            //cy.get('@emailInput').should('have.value', emailAddress)
})
})