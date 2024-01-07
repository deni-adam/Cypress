export class LoginPage {
  constructor() {
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.loginButton = ".btn";
  }

  visit() {
    return cy.visit("/");
  }

  typeUserName(username) {
    cy.get(this.usernameInput).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickOnLoginButton() {
    cy.get(this.loginButton).contains("Login").click();
  }

  loginUser(typeUserName, typePassword) {
    return (
      this.typeUserName(typeUserName),
      this.typePassword(typePassword),
      this.clickOnLoginButton()
    );
  }
}

// login.typeUserName("cy_podzim_2023");
// login.typePassword("CypressPodzim");
