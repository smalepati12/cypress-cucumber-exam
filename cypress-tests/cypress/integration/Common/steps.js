import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import DP from '../../page-objects/dashboard.page';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

When('I navigate to the device dashboard', function() {
  cy.visit('http://localhost/');
});

When(
  'I click the Reboot button of the device at the address {string}',
  address => {
    cy.wait(3000);
    DP.rebootButton.eq(1).click();
    cy.log(address);
  }
);

Then('the device successfully restarts', function() {
  DP.rebootButton.eq(1).should('be.visible');
});

Then('the device status indicator becomes green', function() {
  DP.rebootButton.eq(1).should('be.enabled');
  DP.rebootImage
    .find('.device-info-item-online')
    .should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
});
