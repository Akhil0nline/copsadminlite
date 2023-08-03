import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { fixture } from "../../hooks/pageFixture";
import ManitouPage from "../../pages/ManitouPage";
import * as data from "../../helper/util/test-data/loginCredentials.json"


setDefaultTimeout(60 * 1000 * 5)
let Manitou: ManitouPage


Given('as logged into manitou', async function () {
    Manitou = new ManitouPage(fixture.page)
    await Manitou.navigateToLoginPage();
    fixture.logger.info("Navigated to the application")
})

Given('User enter the username in manitou', async function () {
    await Manitou.enterUserName(data.userNameManitou)
});

Given('User enter the password in manitou', async function () {
    await Manitou.enterPassword(data.passwordManitou)
})

When('User click on the login button in manitou', async function () {
    await Manitou.clickLoginButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

When('Click on search button in home page', async function () {
    await Manitou.clickOnSearchButton()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds") 
});

When('Enter search text', async function () {
    await Manitou.searchSite()
});

When('Click on search icon', async function () {
    await Manitou.clickOnSearchIcon()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
});

When('Click on search Result', async function () {
    await Manitou.clickOnSearchResult()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })

 When('Click on SYSTEM menu', async function () {
    await Manitou.clickOnSystemMenu()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })

 When('Click on ENVYSION menu', async function () {
    await Manitou.clickOnENVYSIONmENU()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })
 When('Click device menu', async function () {
    await Manitou.clickOnDeviceMENU()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })


 When('select a camera', async function () {
    await Manitou.clickOnFirstCamera()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })

 When('Verify the option string In ENVYSION', async function () {
    await Manitou.verifyoptionString()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })

 When('Verify the value in address field', async function () {
    await Manitou.verifyAddressValue()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })
 When('Click on IPC-CORE menu', async function () {
    await Manitou.clickOnIPCCoreMENU()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })
 When('Verify the option string in IPC', async function () {
    await Manitou.verifyoptionStringInIPC()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })
 When('Click device menu under IPC-CORE', async function () {
    await Manitou.clickOnIPCDevice()
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
 })