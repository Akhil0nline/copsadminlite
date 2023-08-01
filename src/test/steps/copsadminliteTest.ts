import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import * as data from "../../helper/util/test-data/loginCredentials.json"
import copsadminlitePage from "../../pages/copsadminlitePage";

setDefaultTimeout(60 * 1000 * 5)
// let copsadminlitePage: copsadminlitePage
let copsadminlite: copsadminlitePage

Given('as logged into copsadminlite', async function () {
    copsadminlite = new copsadminlitePage(fixture.page)
    await copsadminlite.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(5000);
})

Given('User enter the username in copsadminlite', async function () {
    await copsadminlite.enterUserName(data.userNameCopsadminlite)

});

Given('User enter the password in copsadminlite', async function () {
    await copsadminlite.enterPassword(data.passwordCopsadminlite)
    console.log(data.passwordCopsadminlite);
})

When('User click on the login button in copsadminlite', async function () {
    await copsadminlite.clickLoginButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('select company from the drop downlist', async function () {
    await copsadminlite.selectWestecFromCompanyddl()
    await copsadminlite.clickonAdministration()

});
When('Click on sites links', async function () {
    await copsadminlite.clickOnSite()
});


When('Select a ENVISION test site', async function () {
    await copsadminlite.clickOnAutomationSite()
});

When('click on the device', async function () {
    await copsadminlite.clickOnENVISIONDevice()
});

When('Select the manufature as ENVISION', async function () {
    await copsadminlite.selectEnvisionFromManufature()
});

When('Enter user name for ENVISION', async function () {
    await copsadminlite.enterUserNameforENVYSION()
});
When('Enter password for ENVISION', async function () {
    await copsadminlite.enterPasswordforENVYSION()
});

When('Click on save', async function () {
    await copsadminlite.ClickOnSaveChanges()
});
When('Verify the success message', async function () {
    await copsadminlite.verifySuccessMessage()

});


