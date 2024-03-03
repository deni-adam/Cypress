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
  it("create new project and new ticket", () => {
    new MenuSection()
      .clickProjects()
      .clickAddProjectButton()
      .typeNameOfProject('projekt ABC')
      .clickSaveProjectButton();
  });
});
