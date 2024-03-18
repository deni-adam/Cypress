import { ProjectDetailPage } from "./project_detail_page";

// TODO - odmazat extends (nezapomenout odmazat i import)
export class ProjectTicketsPage extends ProjectDetailPage {
  constructor() {
    super();
    this.addTicketButton = '[test_id="Add Ticket"]';
    // TODO: přidat do selektoru mezera select
    this.statusSelect = '[data-testid="Status"]';
    // this.selectStatus =
    //   '//div[@data-testid="Status"]//option[contains(text(), "Open")]';
    // TODO: dtto přidat mezera select
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

  // TODO - přidat parametr: select (při psaní testu se vybírá status pro výběr v selectu, např. "Open")
  // TODO - ideálně přejmenovat metodu na: selectStatus
  // * dokumentace selectu: https://docs.cypress.io/api/commands/select
  clickStatusSelect() {
    // cy.path(this.selectStatus).click();
    // TODO - namísto použití click() použít select() - viz dokumentace, a vložíš parametr metody
    // * Příklad: cy.get(this.selector).select("Open");
    cy.get(this.statusSelect).click();
    return this;
  }

  // TODO - dtto parametr: select
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
