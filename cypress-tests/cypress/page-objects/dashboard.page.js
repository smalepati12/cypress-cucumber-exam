class DashboardPage {
  get rebootButton() {
    return cy.get('.device-info-item button');
  }
  get rebootImage() {
    return cy.get('.device-info-item');
  }

  get rebootAddress() {
    return cy.get('.device-info-item .device-info-address');
  }
}

export default new DashboardPage();