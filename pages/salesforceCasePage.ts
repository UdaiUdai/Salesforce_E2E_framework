import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class SalesforceCasePage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        try {
            // Wait for page to stabilize
                      
            // Try primary selector
           // const newBtnExists = await this.page.locator(selectors.cases.newBtn).isVisible();
           
                await this.click(selectors.cases.newBtn, "New", "Button");
            
        } catch (error) {
            console.error('Error clicking new button:', error);
            throw error;
        }
    }

    public async newContactInCase() {
        try {
            // Wait for page to stabilize
    
            // Try primary selector
                 await this.click(selectors.cases.searchContact,"Contact Dropdown","placeholder")
                await this.click(selectors.cases.newContactBtn, "New Contact", "Button");
           
        } catch (error) {
            console.error('Error clicking new contact button:', error);
            throw error;
        }
    }

    public async selectSalutation(value: string) {
        await this.click(selectors.cases.salutationDD, "Salutation", "Dropdown");
        await this.click(selectors.cases.dropdownValueSelector(value), value, "Option");
    }

    public async enterFirstName(value: string) {
        await this.type(selectors.cases.firstNameInput, "First Name", value);
    }

    public async enterLastName(value: string) {
        await this.type(selectors.cases.lastNameInput, "Last Name", value);
    }

    public async saveContact() {
        await this.click(selectors.cases.saveContactBtn, "Save Contact", "Button");
    }

    public async selectStatus(value: string) {
        await this.click(selectors.cases.statusDD, "Status", "Dropdown");
        await this.click(selectors.cases.dropdownValueSelector(value), value, "Option");
    }

    public async selectCaseOrigin(value: string) {
        await this.click(selectors.cases.originDD, "Case Origin", "Dropdown");
        await this.click(selectors.cases.dropdownValueSelector(value), value, "Option");
    }

    public async enterSubject(value: string) {
        await this.type(selectors.cases.subjectInput, "Subject", value);
    }

    public async enterDescription(value: string) {
        await this.type(selectors.cases.descriptionInput, "Description", value);
    }

    public async saveCase() {
        await this.click(selectors.cases.saveBtn, "Save", "Button");
    }

    public async verifyCaseCreation(firstName: string) {
        await this.spinnerDisappear();
        const contactName = await this.getInnerText(selectors.cases.verificationText(firstName));
        expect(contactName).toContain(firstName);
    }

    public async searchCase(caseNumber: string) {
        await this.type(selectors.cases.searchInput, "Search", caseNumber);
        await this.keyboardAction(selectors.cases.searchInput, "Enter", "Input", "Search");
    }

    public async clickCaseRecord(caseNumber: string) {
        await this.click(selectors.cases.caseRecordLink(caseNumber), caseNumber, "Link");
    }

    public async editCase() {
        await this.click(selectors.cases.editBtn, "Edit", "Button");
    }

    public async deleteCase() {
        await this.click(selectors.cases.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.cases.deleteBtn, "Delete", "Button");
        await this.click(selectors.cases.deleteConfirm, "Confirm Delete", "Button");
    }

    public async deleteContact() {
        await this.click(selectors.cases.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.cases.deleteBtn, "Delete", "Button");
        await this.click(selectors.cases.deleteConfirm, "Confirm Delete", "Button");
    }

    public async closeTAB() {
        await this.click(selectors.cases.closeTab, "Close TAB", "Button");
    }
}
