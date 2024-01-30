import { LoginPage } from "./login_page";
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