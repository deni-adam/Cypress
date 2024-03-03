import { ProjectsPage } from "./projects_page";

export class NewProjectWindowPage extends ProjectsPage {
  constructor() {
    super();
    this.nameInputOfProject = '[data-testid="Name"]';
    this.saveProjectButton = ".btn-primary-modal-action";
  }

  typeNameOfProject(projectName) {
    cy.get(this.nameInputOfProject).type(projectName);
    return this;
  }

  clickSaveProjectButton() {
    cy.get(this.saveProjectButton).click();
    return new ProjectsPage();
  }
}
