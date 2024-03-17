import { LoginPage } from "../pages/login_page.js";
import { MenuSection } from "../pages/menu_section.js";

describe("Polymorhism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .visitUrl()
      .typeUserName("cy_podzim_2023")
      .typePassword("CypressPodzim")
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
