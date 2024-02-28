import { MenuSection } from "./menu_section.js";

export class ProjectsPage extends MenuSection {
  constructor() {
    super();
    this.addProjectButton = ".entitly-listing-buttons-left > .btn btn-primary";
    this.nameInputOfProject = '[data-testid="Name"]';
    this.saveProjectButton = "btn btn-primary btn-primary-modal-action";
    this.tickets = ".selected > a";
    this.addTicketButton = '[test_id="Add Ticket"]';
    this.selectStatus = "#fields_186";
    this.selectType = "#fields_183";
    this.ticketSubjectInput = "#fields_184";
    this.saveTicketButton = ".btn btn-primary btn-primary-modal-action";
  }

  clickAddProjectButton() {
    cy.get(this.addProjectButton).click();
    return this;
  }

  typeNameOfProject() {
    cy.get(this.nameInputOfProject).type("Projekt abc");
    return this;
  }

  clickSaveProjectButton() {
    cy.get(this.saveButton).click();
    return this;
  }

  goToTicketsOfProject() {
    cy.get(this.tickets).contains("Tickets").click();
    return this;
  }

  clickAddTicketButton() {
    cy.get(this.addTicketButton).click();
  }

  selectStatus() {
    cy.get(this.selectStatus).select("61").should("eq", "Open");
    return this;
  }

  selectType() {
    cy.get(this.selectType).select("58").should("eq", "Report a bug");
    return this;
  }

  typeTicketSubject() {
    cy.get(this.typeTicketSubject).type("Bug abc");
    return this;
  }

  clickSaveTicketButton() {
    cy.get(this.clickSaveTicketButton).click();
    return this;
  }
}
