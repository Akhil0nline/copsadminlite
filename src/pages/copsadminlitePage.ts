import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";


export default class copsadminlitePage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        userName: "//input[@id='tbUserName']",
        password: "//input[@id='tbPassword']",
        loginButton: "//input[@id='btnSubmit']",
        companyddl: "//li[@class='hd']//select[1]",
        administrationTab: "//a[contains(text(),'Administration')]",
        sitesLink: "//a[@href='CustomerManagement/Sites/Sites.aspx']",
        automationSite: "//a[contains(text(),'AUTOMATION')]",
        envisionDevice: "//a[contains(text(),'ENVISION')]",
        envisionusername: "//td[@id='valusername']//input[1]",
        envisionpassword: "//td[@id='valpassword']//input[1]",
        manufatureddl: "//select[@id='manufacturer']",
        saveDetailsButton: "//input[@id='devicedetailsformsubmit']"


    }
    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLCOPSADMINLITE);


    }
    async enterUserName(user: string) {
        await this.page.locator(this.Elements.userName).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.password).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginButton);
    }

    async selectWestecFromCompanyddl() {
        await this.page.locator(this.Elements.companyddl).selectOption("WESTEC INTELLIGENT SURVEILLANCE");
    }

    async clickonAdministration() {
        await this.base.waitAndClick(this.Elements.administrationTab);
    }

    async clickOnSite() {
        await this.base.waitAndClick(this.Elements.sitesLink);

}

async clickOnAutomationSite() {
    await this.base.waitAndClick(this.Elements.automationSite);

}

async clickOnENVISIONDevice() {
    await this.base.waitAndClick(this.Elements.envisionDevice);

}

async selectEnvisionFromManufature () {

    await this.page.locator(this.Elements.manufatureddl).selectOption("ENVYSION");
}

async enterUserNameforENVYSION() {
    await this.page.locator(this.Elements.envisionusername).clear()
    await this.page.locator(this.Elements.envisionusername).fill("iss.oe@interfacesys.com")
    await this.page.locator(this.Elements.envisionpassword).clear()
    await this.page.locator(this.Elements.envisionpassword).fill("interface.123")

}
async ClickOnSaveChanges() {
    await this.base.waitAndClick(this.Elements.saveDetailsButton);

}
}