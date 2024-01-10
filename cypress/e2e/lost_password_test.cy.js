import { LoginPage } from "../pages/login_page"

it('test for lost password recovery', () => {
    new LoginPage()
    .visitUrl()
    .clickForgottenPassword()
    .typeUsername("lost_password_user")
    .typeEmail("lost_password@tredgate.cz")
    .clickSendButton();
})