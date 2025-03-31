describe('template spec', () => {
    it("check the shopping list", () => { 
  cy.visit("http://127.0.0.1:5500/shoppingList.html");
  cy.get("#itemInput").type("milk");
  cy.get("#AddButton").click();
  cy.get("#itemInput").type("bread");
  cy.get("#AddButton").click();
  //checking if the items are added to the list
  cy.get(".list-group").should("contain", "MILK");
  cy.get(".list-group").should("contain", "BREAD");
  // clicking on checkbox to mark the item as bought
  cy.get(".list-group-item").first().find("input[type='checkbox']").check();
  // checking if the item with checkbox is checked
  cy.get(".list-group-item").first().find("input[type='checkbox']").should("be.checked");
  // clicking on the delete button to remove the item from the list
  cy.get(".list-group-item").first().find("button").click();
  // checking if the item is removed from the list
  cy.get(".list-group").should("not.contain", "MILK");
  
  })
})