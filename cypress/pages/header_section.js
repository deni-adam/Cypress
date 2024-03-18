import { LoginPage } from "./login_page";
// TODO: HeaderSection má extendovat MenuSection
export class HeaderSection {
  constructor() {
    this.dropdownMenu = ".user-photo-header";
    this.logOut = "#logout";
  }

  clickProfile() {
    cy.get(this.dropdownMenu).click();
    return this;
  }

  clickLogOut() {
    cy.get(this.logOut).click();
    return new LoginPage();
  }
}
