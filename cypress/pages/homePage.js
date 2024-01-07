import { LoginPage } from "../pages/loginPage";
export class HomePage {
  constructor() {
    this.dropdownMenu = ".user-photo-header";
    this.logOut = "#logout";
  }

  getDropdownMenu() {
    cy.get(this.dropdownMenu).click();
    return this;
  }

  clickLogOut() {
    cy.get(this.logOut).click();
    return new LoginPage();
  }
}
