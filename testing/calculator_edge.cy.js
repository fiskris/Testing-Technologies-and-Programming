describe('testing calulator', () => {
  // Open the URL and set aliases before each test
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/calculator.html");
    // Assign aliases to the option buttons
    cy.get('[test-cy="0"]').as('0');
    cy.get('[test-cy="1"]').as('1');
    cy.get('[test-cy="2"]').as('2');
    cy.get('[test-cy="3"]').as('3');
    cy.get('[test-cy="4"]').as('4');
    cy.get('[test-cy="5"]').as('5');
    cy.get('[test-cy="6"]').as('6');
    cy.get('[test-cy="7"]').as('7');
    cy.get('[test-cy="8"]').as('8');
    cy.get('[test-cy="9"]').as('9');

    cy.get('[test-cy="add"]').as('add');
    cy.get('[test-cy="subtract"]').as('subtract');
    cy.get('[test-cy="multiply"]').as('multiply');
    cy.get('[test-cy="divide"]').as('divide');
    cy.get('[test-cy="equal"]').as('equal');
    cy.get('[test-cy="decimal"]').as('decimal');
    cy.get('[test-cy="clear"]').as('clear');
    cy.get('[test-cy="negative"]').as('negative');

    cy.get('[test-cy="display"]').as('display');
  })
  it('test a functionality of calculator', () => {
// Test the calculator functionality
  // Check the initial display value
    cy.get('@display').should('have.text', '0')
  // Perform addition: 1 + 2 = 3
    cy.get('@1').click()
    cy.get('@add').click()
    cy.get('@2').click()
    cy.get('@equal').click()
    // Check the result
    cy.get('@display').should('have.text', '3')
    // clear the display and check if it resets to 0
    cy.get('@clear').click()
    cy.get('@display').should('have.text', '0')
  // Perform subtraction: 3 - 4 = -1
    cy.get('@3').click()
    cy.get('@subtract').click() 
    cy.get('@4').click() 
    cy.get('@equal').click()
    // Check the result
    cy.get('@display').should('have.text', '-1')
  // perform multiplication: 5 * 6 = 30
    cy.get('@5').click()
    cy.get('@multiply').click()
    cy.get('@6').click()
    cy.get('@equal').click()
    // Check the result
    cy.get('@display').should('have.text', '30')
    //checking the negative number toggle
    cy.get('@7').click()
    cy.get('@negative').click()
    cy.get('@display').should('have.text', '-7')
    //addition 
    cy.get('@add').click()
    cy.get('@9').click()
    //checking the negative number toggle twice if number will be back to positive
    cy.get('@negative').click()
    cy.get('@display').should('have.text', '-9')
    cy.get('@negative').click()
    cy.get('@display').should('have.text', '9')
    cy.get('@equal').click() 
    // Check the result -7 + 9 = 2
    cy.get('@display').should('have.text', '2')
    // clear the display and check if it resets to 0
    cy.get('@clear').click()
    cy.get('@display').should('have.text', '0')
  // Perform division: 8 / 2 = 4
    cy.get('@8').click()
    cy.get('@divide').click()
    cy.get('@2').click()
    cy.get('@equal').click()
    cy.get('@display').should('have.text', '4')
  // checking the division by zero
    cy.get('@6').click()
    cy.get('@divide').click()
    cy.get('@0').click()
    cy.get('@equal').click()
    // This should show an error message
    cy.get('@display').should('have.text', 'Infinity')
    //checking the decimal point
    cy.get('@clear').click()  
    //first number  
    cy.get('@5').click() 
    cy.get('@decimal').click()
    cy.get('@2').click()
    //operation add
    cy.get('@add').click()
    //second number
    cy.get('@3').click()
    cy.get('@decimal').click()
    cy.get('@6').click()
    //operation equal
    cy.get('@equal').click()
    //checking the result
    cy.get('@display').should('have.text', '8.8')
    // multidigit number
    cy.get('@clear').click()
    //first number
    cy.get('@2').click()
    cy.get('@3').click()
    cy.get('@multiply').click()
    //second number
    cy.get('@4').click()
    cy.get('@decimal').click()
    cy.get('@5').click()
    //operation equal
    cy.get('@equal').click()
    //checking the result 23 * 4.5 = 103.5
    cy.get('@display').should('have.text', '103.5')
  })
})