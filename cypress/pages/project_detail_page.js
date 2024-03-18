import { ProjectsPage } from "./projects_page";

// TODO: odstranit extends ProjectsPage, nahradit za extends HeaderSection
export class ProjectDetailPage extends ProjectsPage {
  constructor() {
    super();
    this.projectTickets = ".nav > :nth-child(2) > a";
  }

  goToTicketsOfProject() {
    const { ProjectTicketsPage } = require("./project_tickets_page.js");
    cy.get(this.projectTickets).click();
    return new ProjectTicketsPage();
  }
}
