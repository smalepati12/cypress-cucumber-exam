class DashboardPage {
  get rebootButton() {
    return cy.get('.device-info-item button');
  }
  get rebootImage() {
    return cy.get('.device-info-item');
  }
  
}

export default new DashboardPage();
