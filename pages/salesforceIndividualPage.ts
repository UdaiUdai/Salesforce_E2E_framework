import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";
import { setEngine } from "crypto";

export class SalesforceIndividualPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        await this.validateElementVisibility(selectors.individuals.newBtn, "New Button");
        await this.click(selectors.individuals.newBtn, "New", "Button");
    }

    public async selectSalutation(value: string) {
        await this.click(selectors.individuals.salutationDD, "Salutation", "Dropdown");
        await this.click(selectors.individuals.dropdownValueSelector(value), value, "Option");
    }

    public async enterFirstName(value: string) {
        await this.type(selectors.individuals.firstNameInput, "First Name", value);
    }

    public async enterLastName(value: string) {
        await this.type(selectors.individuals.lastNameInput, "Last Name", value);
    }

    public async saveIndividual() {
        await this.click(selectors.individuals.saveBtn, "Save", "Button");
    }

    public async verifyIndividualCreation(firstName: string) {
        await this.spinnerDisappear();
        await this.click(selectors.individuals.details,"details tab","title")
        const name = await this.getInnerText(selectors.individuals.verificationText);
        expect(name).toContain(firstName);
    }

    public async searchIndividual(name: string) {
        await this.type(selectors.individuals.searchInput, "Search", name);
        await this.keyboardAction(selectors.individuals.searchInput, "Enter", "Input", "Search");
    }

    public async clickIndividualRecord(name: string) {
        await this.click(selectors.individuals.individualRecordLink(name), name, "Link");
    }

    public async editIndividual() {
        await this.click(selectors.individuals.editBtn, "Edit", "Button");
    }

    public async deleteIndividual() {
        await this.click(selectors.individuals.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.individuals.deleteBtn, "Delete", "Button");
        await this.click(selectors.individuals.deleteConfirm, "Confirm Delete", "Button");
    }

    public async closeTAB() {
        await this.click(selectors.individuals.closeTab, "Close TAB", "Button");
    }
}
