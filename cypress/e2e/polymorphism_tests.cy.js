import { LoginPage } from "../pages/login_page.js";
import { MenuSection } from "../pages/menu_section.js";
import { ProjectsPage } from "../pages/projects_page.js";

describe("Polymorhism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .visitUrl()
      .typeUserName("cy_podzim_2023")
      .typePassword("CypressPodzim")
      .clickOnLoginButton();
  });
  it("create new project and new ticket", () => {
    new ProjectsPage()
    .clickAddProjectButton
    .type
  });
});
