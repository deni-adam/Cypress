import { MenuSection } from "./menu_section.js";

export class ProjectsPage extends MenuSection {
  constructor() {
    super();
    this.addProjectButton = '[test_id="Add Project"]';
    // this.addTicketButton = '[test_id="Add Ticket"]';
    // this.selectStatus = "#fields_186";
    // this.selectType = "#fields_183";
    // this.ticketSubjectInput = "#fields_184";
    // this.saveTicketButton = ".btn btn-primary btn-primary-modal-action";
  }

  clickAddProjectButton() {
    const { NewProjectWindowPage } = require("./new_project_window_page.js");
    cy.get(this.addProjectButton).click();
    return new NewProjectWindowPage();
  }


  // clickAddTicketButton() {
  //   cy.get(this.addTicketButton).click();
  // }

  // selectStatus() {
  //   cy.get(this.selectStatus).select("61").should("eq", "Open");
  //   return this;
  // }

  // selectType() {
  //   cy.get(this.selectType).select("58").should("eq", "Report a bug");
  //   return this;
  // }

  // typeTicketSubject() {
  //   cy.get(this.typeTicketSubject).type("Bug abc");
  //   return this;
  // }

  // clickSaveTicketButton() {
  //   cy.get(this.clickSaveTicketButton).click();
  //   return this;
  // }
}
