import { LoginPage } from "./login_page";

export class LostPassword{
constructor (){
    this.usernameInput = 'form-control placeholder-no-fix required';
    this.emailInput = '[name="email"]';
    this.sendButton = '.btn_btn-info_pull-right';
    this.backButton = '#back-btn';
}

typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
}

typeEmail(email) {
    cy.get(emailInput).type(email);
    return this;
}

clickSendButton() {
    cy.get(this.sendButton).click();
    return this;
    // return this nebo neco jineho??
}

clickBackButton() {
    cy.get(this.backButton).click();
    return new LoginPage;
}

}