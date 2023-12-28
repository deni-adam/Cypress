import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";

const login = new LoginPage();
const home = new HomePage();

beforeEach("visit website", () => {
  login.visit("/");
});

it("log in", () => {
  login.loginUser("cy_podzim_2023", "CypressPodzim");
  home.logOutUser();
});

// it("log in", () => {
//   cy.intercept("GET", "/").as("homePage");
//   cy.visit("https://tegb-frontend-88542200c6db.herokuapp.com/");
//   cy.wait("@homePage");
//   cy.get('[data-testid="username-input"]').type('test'),
//   cy.get('[data-testid="password-input"]').type('heslo');
//   cy.get('[data-testid="submit-button"]').contains('Přihlásit se').click();
// });
