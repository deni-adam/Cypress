export class HomePage {
  constructor() {
    this.dropdownMenu = ".user-photo-header";
    this.logOut = "#logout";
  }
  getDropdownMenu() {
    // return cy.get(".dropdown-toggle");
    cy.get(this.dropdownMenu);
  }

  selectLogOut() {
    cy.get(this.logOut);
  }

  logOutUser() {
    return this.getDropdownMenu().click(), this.selectLogOut().click();
  }
}
