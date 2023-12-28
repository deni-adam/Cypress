export class LoginPage {
  visit() {
    return cy.visit("/");
  }

  typeUserName(username) {
    return cy.get("#username").type(username);
  }

  typePassword(password) {
    return cy.get("#password").type(password);
  }

  clickOnLoginButton() {
    return cy.get(".btn").contains("Login").click();
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
