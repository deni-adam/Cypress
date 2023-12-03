// it("log in", () => {
//   cy.visit("/");
//   cy.get("#username").type('cy_podzim_2023');
//   cy.get("#password").type('CypressPodzim');
//   cy.get('.btn').contains('Login').click();
// });

import { LoginPage } from '../pages/loginPage';

const login = new LoginPage();

beforeEach ('visit website', () => {
  login.visit();
})

it ('log in', () => {
  login.userName('cy_podzim_2023');
  login.password('CypressPodzim');
  login.loginButton().click();
})
