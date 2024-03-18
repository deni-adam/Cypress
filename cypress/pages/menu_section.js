import { HeaderSection } from "./header_section.js";

// TODO: MenuSection má extendovat HeaderSection
export class MenuSection extends HeaderSection {
  constructor() {
    super();
    this.menuProjects = "#Projects";
  }

  clickProjects() {
    const { ProjectsPage } = require("./projects_page.js");
    cy.get(this.menuProjects).click();
    return new ProjectsPage();
  }
}
