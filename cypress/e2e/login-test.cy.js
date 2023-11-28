it("log in", () => {
  cy.visit("/");
  cy.get("#username").type('cy_podzim_2023');
  cy.get("#password").type('CypressPodzim');
  cy.get('.btn').contains('Login').click();
});



