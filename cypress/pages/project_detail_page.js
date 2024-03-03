export class ProjectDetailPage {
  constructor() {
    this.tickets = ".selected > a";
  }
 
  goToTicketsOfProject() {
    cy.get(this.tickets).contains("Tickets").click();
    return this;
  }
}
