import { LoginPage } from "../pages/loginPage";
it("log in and log out", () => {
  new LoginPage()
    .visitUrl()
    .typeUserName("cy_podzim_2023")
    .typePassword("CypressPodzim")
    .clickOnLoginButton()
    .clickProfile()
    .clickLogOut();
});
