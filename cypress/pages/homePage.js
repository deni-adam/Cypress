export class HomePage {
  getDropdownMenu() {
    // return cy.get(".dropdown-toggle");
    return cy.get('.user-photo-header')
  }

  selectLogOut() {
    return cy.get("#logout");
  }

  logOutUser() {
    return this.getDropdownMenu().click(), this.selectLogOut().click();
  }
}
