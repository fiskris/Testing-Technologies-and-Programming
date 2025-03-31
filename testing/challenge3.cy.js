// Write a test
//     Visit this page (https://example.cypress.io/commands/actions).
//     Query for the action button with a class ".action-btn" and click on it.
//     Query for the element with an id "#action-canvas" and click on it.
//     Query for the element with an id "#action-canvas" and click on the "topLeft".
//     Query for the element with an id "#action-canvas" and click on the "bottomRight".

describe('My Third challenge', () => {
    it('Visits the Kitchen Sink', () => {
        // visit the page
        cy.visit('https://example.cypress.io/commands/actions')
        
        // assert about the content on the page
        //cy.url().should('include', '/commands/actions')
        //cy.get('h1').should('contain', 'Actions')
        
        // Query for the action button with a class ".action-btn" and click on it.
        cy.get('.action-btn').click()
        // assert about the button
        //cy.get('.action-btn').should('contain', 'popover')
        // Query for the element with an id "#action-canvas" and click on it.
        cy.get('#action-canvas').click()    
        //query for the element with an id "#action-canvas" and click on the "topLeft".
        cy.get('#action-canvas').click('topLeft')
        //query for the element with an id "#action-canvas" and click on the "bottomRight".
        cy.get('#action-canvas').click('bottomRight')      

    })
}
)