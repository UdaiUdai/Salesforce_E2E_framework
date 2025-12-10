import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class SalesforceContactPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        await this.validateElementVisibility(selectors.contacts.newBtn, "New Button");
        await this.click(selectors.contacts.newBtn, "New", "Button");
    }

    public async selectSalutation(value: string) {
        await this.click(selectors.contacts.salutationDD, "Salutation", "Dropdown");
        await this.click(selectors.contacts.dropdownValueSelector(value), value, "Option");
    }

    public async enterFirstName(value: string) {
        await this.type(selectors.contacts.firstNameInput, "First Name", value);
    }

    public async enterLastName(value: string) {
        await this.type(selectors.contacts.lastNameInput, "Last Name", value);
    }

    public async enterEmail(value: string) {
        await this.type(selectors.contacts.emailInput, "Email", value);
    }

    public async enterPhone(value: string) {
        await this.type(selectors.contacts.phoneInput, "Phone", value);
    }

    public async saveContact() {
        await this.click(selectors.contacts.saveBtn, "Save", "Button");
    }

    public async verifyContactCreation(firstName: string) {
        await this.spinnerDisappear();
        const name = await this.getInnerText(selectors.contacts.verificationText);
        expect(name).toContain(firstName);
    }

    public async searchContact(name: string) {
        await this.type(selectors.contacts.searchInput, "Search", name);
        await this.keyboardAction(selectors.contacts.searchInput, "Enter", "Input", "Search");
    }

    public async clickContactRecord(name: string) {
        await this.click(selectors.contacts.contactRecordLink(name), name, "Link");
    }

    public async editContact() {
        await this.click(selectors.contacts.editBtn, "Edit", "Button");
    }

    public async deleteContact() {
        await this.click(selectors.contacts.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.contacts.deleteBtn, "Delete", "Button");
        await this.click(selectors.contacts.deleteBtn, "Confirm Delete", "Button");
    }

    public async closeTAB() {
        await this.click(selectors.contacts.closeTab, "Close TAB", "Button");
    }
}
