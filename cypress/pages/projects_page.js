import { MenuSection } from "./menu_section.js";

export class ProjectsPage extends MenuSection {
  constructor() {
    super();
    this.addProjectButton = '[test_id="Add Project"]';
  }

  clickAddProjectButton() {
    const { NewProjectWindowPage } = require("./new_project_window_page.js");
    cy.get(this.addProjectButton).click();
    return new NewProjectWindowPage();
  }
}
