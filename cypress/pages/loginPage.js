import { HomePage } from "./homePage";
export class LoginPage {
  constructor() {
    this.url = "/";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
  }

  visitUrl() {
    cy.visit(this.url);
    return this;
  }

  typeUserName(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickOnLoginButton() {
    cy.get(this.loginButton).contains("Login").click();
    return new HomePage();
  }
}

// login.typeUserName("cy_podzim_2023");
// login.typePassword("CypressPodzim");
