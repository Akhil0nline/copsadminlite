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
        IPCDevice: "//a[contains(text(),' IPC-CORE')]",
        IPCDeviceFusion: "//a[contains(text(),' IPC-FUSION')]",
        envisionusername: "//td[@id='valusername']//input[1]",
        envisionpassword: "//td[@id='valpassword']//input[1]",
        manufatureddl: "//select[@id='manufacturer']",
        saveDetailsButton: "//input[@id='devicedetailsformsubmit']",
        ivrDeviceddl: "//select[@id='ivrDeviceType']",
        storeNo: "//input[@id='txtStoreNo']",
        viewerType: "//select[@id='viewerType']",
        IPCUserName: "//input[@id='username']",
        IPCPassword: "//input[@id='password']",
        RTSPPort: "//input[@id='coreport']",
        IPCFusionUserName: "//input[@id='username']",
        IPCFusionPassword: "//input[@id='password']",
        IPCFusionDeviceID: "//input[@id='deviceId']",
        OPENEYEDEVICE: "//a[contains(text(),'OPENEYE')]",
        OPENEYEUserName: "//input[@id='username']",
        OPENEYEPassword: "//input[@id='password']",
        OPENEYEDeviceID: "//input[@id='deviceId']",
        ServiceLevelDDL: "//select[@id='Servicelevel']",
        SaveAccountInfo: "//input[@id='BtnSaveServiceLevel']",
        sensortab: "//span[text()='Sensors']",
        camera1Description: "(//tr[@role='row']//input)[2]",
        saveAllInSensorTab: "(//input[@type='submit'])[2]",
        audioTab: "//span[text()='Audio']",
        audiozoneName: "(//input[@class='FormField'])[1]",
        newAudioZoneButton: "//input[@value='Add New Audio Zone']",
        saveAllButtonInAudioZone: "//input[@value='Save all']"
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

    async selectEnvisionFromManufature() {

        await this.page.locator(this.Elements.manufatureddl).selectOption("ENVYSION");
        await this.page.locator(this.Elements.ivrDeviceddl).selectOption("Envysion Cloud DVR");
    }

    async enterUserNameforENVYSION() {
        await this.page.locator(this.Elements.envisionusername).clear()
        await this.page.locator(this.Elements.envisionusername).fill("iss.oe@interfacesys.com")
        await this.page.locator(this.Elements.envisionpassword).clear()
        await this.page.locator(this.Elements.envisionpassword).fill("interface.123")


    }

    async enterPasswordforENVYSION() {

        await this.page.locator(this.Elements.envisionpassword).clear()
        await this.page.locator(this.Elements.envisionpassword).fill("interface.123")
    }
    async ClickOnSaveChanges() {
        await this.base.waitAndClick(this.Elements.saveDetailsButton);

    }
    async verifySuccessMessage() {
        this.page.once('dialog', dialog => {
            const originalMessage = dialog.message();
            dialog.accept().catch(() => { });

            const alertMessage = 'Updated to CopsAdmin Lite Successfully';
            if (originalMessage === alertMessage) {
                console.log("site details are updated");
            } else {
                throw new Error("No records updated");
            }
        });

    }
    async ExtractStoreNo() {
        // const storeNoData = await this.page.locator(this.Elements.storeNo)
        // const storeNoDataText = await storeNoData.innerText()
        // console.log(storeNoDataText)
        // return storeNoDataText

    }
    async selectIPCCore() {
        await this.base.waitAndClick(this.Elements.IPCDevice);
    }

    async selectIPCFromManufature() {

        await this.page.locator(this.Elements.manufatureddl).selectOption("IPConfigure");
        await this.page.locator(this.Elements.ivrDeviceddl).selectOption("IP Configure");
    }
    async selectIPCcOREFromViewerType() {

        await this.page.locator(this.Elements.viewerType).selectOption("IPConfigure Core");
    }

    async enterUserNameforIPC() {
        await this.page.locator(this.Elements.IPCUserName).clear()
        await this.page.locator(this.Elements.IPCUserName).fill("admin")

    }

    async enterPasswordforIPC() {

        await this.page.locator(this.Elements.IPCPassword).clear()
        await this.page.locator(this.Elements.IPCPassword).fill("Interface1")
    }


    async getValueInRTPCPort() {

        const rtpcPort = await this.page.locator(this.Elements.RTSPPort)
        const rtpcPortText = await rtpcPort.innerText()
        return rtpcPortText
    }
    async selectIPCCoreDevice() {
        await this.base.waitAndClick(this.Elements.IPCDeviceFusion);
    }

    async selectIPCFusionFromViewerType() {

        await this.page.locator(this.Elements.viewerType).selectOption("IPConfigure Fusion");
    }

    async enterUserNameforIPCFusion() {
        await this.page.locator(this.Elements.IPCUserName).clear()
        await this.page.locator(this.Elements.IPCUserName).fill("admin")

    }

    async enterPasswordforIPCFusion() {

        await this.page.locator(this.Elements.IPCPassword).clear()
        await this.page.locator(this.Elements.IPCPassword).fill("Interface1!")
    }

    async enterDeviceIDforIPCFusion() {

        await this.page.locator(this.Elements.IPCFusionDeviceID).clear()
        await this.page.locator(this.Elements.IPCFusionDeviceID).fill("ef1bb32d-e1f2-4c7b-bf9c-5b3b7ab272bb")
    }





    async selectOPENEYEDevice() {
        await this.base.waitAndClick(this.Elements.OPENEYEDEVICE);
    }

    async selectopeneyeViewerType() {


        await this.page.locator(this.Elements.manufatureddl).selectOption("OpenEye");
        await this.page.locator(this.Elements.ivrDeviceddl).selectOption("OpenEye 16");
        await this.page.locator(this.Elements.viewerType).selectOption("OpenEye");
    }

    async enterUserNameforOPENEYE() {
        await this.page.locator(this.Elements.IPCUserName).clear()
        await this.page.locator(this.Elements.IPCUserName).fill("iss.oe@interfacesys.com")

    }

    async enterPasswordforOPENEYE() {

        await this.page.locator(this.Elements.IPCPassword).clear()
        await this.page.locator(this.Elements.IPCPassword).fill("interface.123")
    }

    async enterDeviceIDforOPENEYE() {

        await this.page.locator(this.Elements.IPCFusionDeviceID).clear()
        await this.page.locator(this.Elements.IPCFusionDeviceID).fill("Z6X7RB")
    }

    async selectServiceLevel() {

        await this.page.locator(this.Elements.ServiceLevelDDL).selectOption("Interactive Lite");
    }

    async saveAccountInfo() {

        await this.page.locator(this.Elements.SaveAccountInfo).click()
    }
    async verifyServiceLevelMessage() {
        this.page.once('dialog', dialog => {
            const originalMessage = dialog.message();
            dialog.accept().catch(() => { });

            const alertMessage = 'Updated Successfully';
            if (originalMessage === alertMessage) {
                console.log("Service Level is updated");
            } else {
                throw new Error("No records updated");
            }
        });

    }
    async clickSensorTab() {

        await this.page.locator(this.Elements.sensortab).click()
    }
    async editCamera01() {

        await this.page.locator(this.Elements.camera1Description).clear()
        await this.page.locator(this.Elements.camera1Description).fill("Front Camera 01")
    }
    async saveAllInSensorTab() {

        await this.page.locator(this.Elements.saveAllInSensorTab).click()
    }
    async clickAudioTab() {

        await this.page.locator(this.Elements.audioTab).click()
    }
    async EnterAudioName() {

        await this.page.locator(this.Elements.audiozoneName).fill("Audio Zone Test")
        await this.page.locator(this.Elements.newAudioZoneButton).click()
    }
    async clickOnSaveButtonInAudioZone() {

        await this.page.locator(this.Elements.saveAllButtonInAudioZone).click()


    }
}