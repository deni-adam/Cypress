import { LoginPage } from "../pages/login_page.js";
import { MenuSection } from "../pages/menu_section.js";

describe("Polymorhism tests", () => {
  beforeEach(() => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");
    new LoginPage()
      .visitUrl()
      .typeUserName(username)
      .typePassword(password)
      .clickOnLoginButton();
  });
  it("create new project", () => {
    new MenuSection()
      .clickProjects()
      .clickAddProjectButton()
      .typeNameOfProject("projekt ABC")
      .clickSaveProjectButton()
      .goToTicketsOfProject()
      .clickAddTicketButton()
      // .clickStatusSelect() // "Open"
      // .clickTypeSelect() // "Report a bug"
      .typeTicketSubject("Bug abc")
      .clickSaveTicketButton();
  });
});
