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
        ipcCoreMenu: "2 - IPC-CORE",
        ipcFusionMenu: "3 - IPC-FUSION",
        DeviceMenu: "Devices",
        camera01: "//span[text()='Camera 01']",
        address: "(//div[@class='ng-scope']//div)[3]//div[2]",
        optionStringIPC: "//div[contains(text(), 'user=admin&password=Interface1')]",
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
        await this.page.getByRole("link", { name: 'Devices' }).first().click()
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
        // const AddressInCopsadminlite = await copsadminlite.ExtractStoreNo()
        const AddressInCopsadminlite = "890"
        if (AddressTextInnterText == AddressInCopsadminlite) {
            console.log("Store number in the address field and value in the address field are same")
        }
        else {
            throw error("Store number in the address field and value in the address field are not same")
        }
    }

    async clickOnIPCCoreMENU() {

        await this.page.getByRole("link", { name: ' 1 - ENVISION' }).click()
        await fixture.page.waitForLoadState();
        fixture.logger.info("Waiting for 2 seconds")
        await fixture.page.waitForTimeout(2000);
        await this.page.getByRole("link", { name: ' 2 - IPC-CORE' }).click()
        // await this.page.getByRole("link", { name: ' 2 - IPC-CORE' }).click()

    }

    async verifyoptionStringInIPC() {
        const optionStringText = await this.page.locator(this.Elements.optionStringIPC)
        const optionStringTextInnterText = await optionStringText.innerText()
        const userRegex = /user=([^&]+)/;
        const passwordRegex = /password=([^&]+)/;
        const rtspPortRegex = /rtspPort=([^&]+)/;

        // Extract the values using regular expressions
        const userMatch = optionStringTextInnterText.match(userRegex);
        const passwordMatch = optionStringTextInnterText.match(passwordRegex);
        const rtspPortMatch = optionStringTextInnterText.match(rtspPortRegex);

        // Check if the matches are found and extract the values
        const user = userMatch ? userMatch[1] : null;
        const password = passwordMatch ? passwordMatch[1] : null;
        const rtspPort = rtspPortMatch ? rtspPortMatch[1] : null;

        // Print the extracted values
        console.log("User:", user);
        console.log("Password:", password);
        console.log("RTSP Port:", rtspPort);
        const actualUserName = "admin"
        const actualpassword = "Interface1"
        const actualrtspPort = "554"
        if (user == actualUserName && password == actualpassword && rtspPort == actualrtspPort) {
            console.log("Showing the correct user name, password and rstsp port")
        }
        else
            throw error("Not updated properly")

    }

    async clickOnIPCDevice() {
        // await this.base.waitAndClick(this.Elements.EnvysionMenu);
        await this.page.getByRole("link", { name: 'Device' }).nth(1).click()

    }

    async clickOnIPCFusionMenu() {

        await this.page.getByRole("link", { name: ' 1 - ENVISION' }).click()
        await fixture.page.waitForLoadState();
        fixture.logger.info("Waiting for 2 seconds")
        await fixture.page.waitForTimeout(2000);
        await this.page.getByRole("link", { name: ' 3 - IPC-FUSION' }).click()

    }

    async clickOnIPCFusionDevice() {
        await this.page.getByRole("link", { name: 'Device' }).nth(2).click()

    }

    async verifyIPCFusion() {
        const optionStringText = await this.page.locator(this.Elements.optionStringIPC);
        const optionStringTextInnerText = await optionStringText.innerText();
        const userRegex = /user=([^&!]+)/;
        const passwordRegex = /password=([^&]+)/;
        const rtspPortRegex = /rtspPort=([^&]+)/;
        const deviceRegex = /device=([^&]+)/;

        // Extract the values using regular expressions
        const userMatch = optionStringTextInnerText.match(userRegex);
        const passwordMatch = optionStringTextInnerText.match(passwordRegex);
        const rtspPortMatch = optionStringTextInnerText.match(rtspPortRegex);
        const deviceMatch = optionStringTextInnerText.match(deviceRegex);

        // Check if the matches are found and extract the values
        const user = userMatch ? userMatch[1] : null;
        const password = passwordMatch ? passwordMatch[1] : null;
        const rtspPort = rtspPortMatch ? rtspPortMatch[1] : null;
        const device = deviceMatch ? deviceMatch[1] : null;

        // Print the extracted values
        console.log("User:", user);
        console.log("Password:", password);
        console.log("RTSP Port:", rtspPort);
        console.log("Device:", device);

        // Update actual values with the expected ones
        const actualUserName = "admin";
        const actualPassword = "Interface1!";
        const actualRtspPort = "5222";
        const actualDevice = "ef1bb32d-e1f2-4c7b-bf9c-5b3b7ab272bb";

        // Check if the extracted values match the expected ones
        if (user === actualUserName && password === actualPassword && rtspPort === actualRtspPort && device === actualDevice) {
            console.log("Showing the correct user name, password, rtsp port, and device");
        } else {
            throw new Error("Not updated properly");
        }


    }
}