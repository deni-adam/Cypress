export class LoginPage {     
    visit() {
        return cy.visit('/');
    }
    
    userName(username) { 
        return cy.get('#username').type(username);
      }

    password(password) {
        return  cy.get("#password").type(password);
    }

    loginButton () {
        return cy.get('.btn').contains('Login');
    }

}   

