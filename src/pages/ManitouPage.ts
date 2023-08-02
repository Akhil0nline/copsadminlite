import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { error } from "winston";
const { randomValuePhone } = require('../helper/util/test-data/randomdata');
const { randomValuePasscode } = require('../helper/util/test-data/randomdata');
import copsadminlitePage from "../pages/copsadminlitePage";

let copsadminlite: copsadminlitePage
export default class ManitouPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
        copsadminlite = new copsadminlitePage(fixture.page);

    }

    private Elements = {
        userName: "//input[@id='username']",
        passwordInput: "//input[@id='password']",
        loginBtn: "//button[@aria-label='LOG IN']//span[1]",
        searchButton: "(//md-icon[@md-font-icon='fa-search'])[1]",
        searchBox: "//input[@bt-focus='ctrl.focusQuery']",
        searchIcon: "//span[text()='Search']",
        searchResult: "(//td[@ng-class='btCtrl.getPriority(h.priority)'])[1]",
        systemsMenu: "(//a[@class='ng-scope']//span)[2]",
        EnvysionMenu: "1 - ENVISION",
        DeviceMenu: "Devices",
        camera01: "//span[text()='Camera 01']",
        address: "(//div[@class='ng-scope']//div)[3]//div[2]",
        optionString: "//div[text()='camera=01&user=iss.oe@interfacesys.com&password=interface.123&vigilcon=false&port=22801&cameraCount=16&className=Envysio ...']"


    }
    async navigateToLoginPage() {
        await this.base.goto(process.env.BASEURLMANITOU);

    }
    async enterUserName(user: string) {
        await this.page.locator(this.Elements.userName).fill(user);
    }
    async enterPassword(Password: string) {
        await this.page.locator(this.Elements.passwordInput).fill(Password);
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn);
    }

    async clickOnSearchButton() {
        await this.base.waitAndClick(this.Elements.searchButton);
    }

    async searchSite() {
        await this.page.locator(this.Elements.searchBox).fill("AUTOMATION");
    }

    async clickOnSearchIcon() {
        await this.base.waitAndClick(this.Elements.searchIcon);

    }

    async clickOnSearchResult() {
        await this.base.waitAndClick(this.Elements.searchResult);

    }
    async clickOnSystemMenu() {
        await this.base.waitAndClick(this.Elements.systemsMenu);

    }
    async clickOnENVYSIONmENU() {
        // await this.base.waitAndClick(this.Elements.EnvysionMenu);
        await this.page.getByRole("link", { name: ' 1 - ENVISION' }).click()
        await this.page.getByRole("link", { name: ' 1 - ENVISION' }).click()

    }
    async clickOnDeviceMENU() {
        await this.page.getByRole("link", { name: 'Devices' }).click()
    }

    async clickOnFirstCamera() {
        await this.base.waitAndClick(this.Elements.camera01);
    }

    async verifyoptionString() {
        const optionStringText = await this.page.locator(this.Elements.optionString)
        const optionStringTextInnterText = await optionStringText.innerText()
        const usernameRegex = /user=([^&]*)/i;
        const passwordRegex = /password=([^&]*)/i;

        const usernameMatch = optionStringTextInnterText.match(usernameRegex);
        const passwordMatch = optionStringTextInnterText.match(passwordRegex);

        const username = usernameMatch ? usernameMatch[1] : null;
        const password = passwordMatch ? passwordMatch[1] : null;

        console.log("Username:", username);
        console.log("Password:", password);
        const actualUserName = "iss.oe@interfacesys.com"
        const actualpassword = "interface.123"
        if (username == actualUserName && password == actualpassword) {
            console.log("Showing the correct user name and password")
        }
        else
            throw error("Not updated properly")

    }
    async verifyAddressValue() {
        const AddressText = await this.page.locator(this.Elements.address)
        const AddressTextInnterText = await AddressText.innerText()
        const AddressInCopsadminlite = await copsadminlite.ExtractStoreNo()
        if (AddressTextInnterText == AddressInCopsadminlite) {
            console.log("Store number in the address field and value in the address field are same")
        }
        else {
            throw error("Store number in the address field and value in the address field are not same")
        }




    }
}