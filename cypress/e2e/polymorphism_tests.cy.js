import { LoginPage } from "../pages/login_page.js";
import { HomePage } from "../pages/home_page";

describe("Polymorhism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .visitUrl()
      .typeUserName("cy_podzim_2023")
      .typePassword("CypressPodzim")
      .clickOnLoginButton();
  });
  it("Logout via polymorphism class", () => {
    new HomePage().clickProfile().clickLogOut();
  });
});
