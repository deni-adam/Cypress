import { ProjectDetailPage } from "./project_detail_page";

export class ProjectTicketsPage extends ProjectDetailPage {
  constructor() {
    super();
    this.addTicketButton = '[test_id="Add Ticket"]';
    this.statusSelect = '[data-testid="Status"]';
    // this.selectStatus =
    //   '//div[@data-testid="Status"]//option[contains(text(), "Open")]';
    this.typeSelect = '[data-testid="Type"]';
    // this.selectType =
    //   '//div[@data-testid="Type"]//option[contains(text(), "Report a Bug")]';
    this.ticketSubjectInput = '[data-testid="Subject"]';
    this.saveTicketButton = ".modal-footer > .btn-primary";
  }

  clickAddTicketButton() {
    cy.get(this.addTicketButton).click();
    return this;
  }

  clickStatusSelect() {
    // cy.path(this.selectStatus).click();
    cy.get(this.statusSelect).click();
    return this;
  }

  clickTypeSelect() {
    // cy.path(this.selectType).click();
    cy.get(this.typeSelect).click();
    return this;
  }

  typeTicketSubject(subject) {
    cy.get(this.ticketSubjectInput).type(subject);
    return this;
  }

  clickSaveTicketButton() {
    cy.get(this.saveTicketButton).click();
    return this;
  }
}
