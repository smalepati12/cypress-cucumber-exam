'use strict';

const { Builder } = require('selenium-webdriver');
const { Before, After, When, Then } = require('@cucumber/cucumber');

let driver;

Before(async function () {
    driver = new Builder()
        .forBrowser('chrome')
        .build();
});

After(async function () {
    if (!driver) {
        return;
    }
    await driver.quit();
});

When('I navigate to the device dashboard', function() {

});

When('I click the Reboot button of the device at the address {string}', function(deviceAddress) {

});

Then('the device successfully restarts', function() {

});
