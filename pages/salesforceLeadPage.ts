import { Page, Locator, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";


export class SalesforceLeadPage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        await this.validateElementVisibility(selectors.leads.newBtn, "New Button")
        await this.click(selectors.leads.newBtn, "New", "Button")
    }

    public async selectSalutation(value: string) {
        await this.click(selectors.leads.salutation, "Salutation", "Button")
        await this.click(selectors.leads.saluationValue(value), "Salutation Value", "Button")
    }

    public async salutation(value: string) {
        await this.click(selectors.leads.salutation, "Salutation", "Button")
        await this.click(selectors.leads.saluationValue(value), "Salutation Value", "Button")
    }

    public async enterFirstName(value: string) {
        await this.type(selectors.leads.firstName, "First Name", value)
    }

    public async firstName(value: string) {
        await this.type(selectors.leads.firstName, "First Name", value)
    }

    public async enterLastName(value: string) {
        await this.type(selectors.leads.lastName, "Last Name", value)
    }

    public async lastName(value: string) {
        await this.type(selectors.leads.lastName, "Last Name", value)
    }

    public async enterCompany(value: string) {
        await this.type(selectors.leads.company, "Company", value)
    }

    public async Company(value: string) {
        await this.type(selectors.leads.company, "Company", value)
    }

    public async saveLead() {
        await this.click(selectors.leads.saveBtn, "Save", "Button")
    }

    public async saveButton() {
        await this.click(selectors.leads.saveBtn, "Save", "Button")
    }

    public async verifyLeadCreation(expectedValue: string) {
        await this.spinnerDisappear();
        await this.validateElementVisibility(selectors.leads.verificationText, "Lead Name")
        const leadName = await this.getInnerText(selectors.leads.verificationText)
        expect(leadName).toContain(expectedValue)
    }

    public async verifiTheLeadAccount(expectedValue: string) {
        await this.validateElementVisibility(selectors.leads.verificationText, "Lead Name")
        const leadName = await this.getInnerText(selectors.leads.verificationText)
        console.log(leadName);
        await this.verification(selectors.leads.verificationText, expectedValue)
    }

    public async searchLead(value: string) {
        await this.type(selectors.leads.searchInput, "Search", value);
        await this.keyboardAction(selectors.leads.searchInput, "Enter", "Input", "Search");
    }

    public async clickLeadRecord(name: string) {
        await this.click(selectors.leads.leadRecordLink(name), name, "Link");
    }

    public async editLead() {
        await this.click(selectors.leads.editBtn, "Edit", "Button");
    }

    public async leadID(userName: string) {
        await this.spinnerDisappear()
        await this.click(selectors.leads.userId(userName), userName, "User Name")
    }

    public async expandButton() {
        await this.click(selectors.leads.expandBtn, "Expand Button", "Button")
    }

    public async deleteLead() {
        await this.validateElementVisibility(selectors.leads.deleteBtn, "Delete");
        await this.click(selectors.leads.deleteBtn, "Delete", "Button");
    }

    public async deletePopUP() {
        await this.click(selectors.leads.deleteBtn, "Delete", "Button")
    }

    public async verifiTheDeletedData() {
        await this.page.waitForLoadState('load')
        await this.verification(selectors.noItemToDisplay, "No items to display")
    }
}