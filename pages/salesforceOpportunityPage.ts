import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class SalesforceOpportunityPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        await this.validateElementVisibility(selectors.opportunities.newBtn, "New Button");
        await this.click(selectors.opportunities.newBtn, "New", "Button");
    }

    public async enterOpportunityName(value: string) {
        await this.type(selectors.opportunities.opportunityNameInput, "Opportunity Name", value);
    }

    public async selectStage(value: string) {
        await this.click(selectors.opportunities.stageDD, "Stage", "Dropdown");
        await this.click(selectors.opportunities.dropdownValueSelector(value), value, "Option");
    }

    public async enterCloseDate(value: string) {
        await this.type(selectors.opportunities.closeeDateInput, "Close Date", value);
    }

    public async enterAmount(value: string) {
        await this.type(selectors.opportunities.amountInput, "Amount", value);
    }

    public async enterAccountName(value: string) {
        await this.type(selectors.opportunities.accountNameField, "Account Name", value);
    }

    public async saveOpportunity() {
        await this.click(selectors.opportunities.saveBtn, "Save", "Button");
    }

    public async verifyOpportunityCreation(oppName: string) {
        await this.spinnerDisappear();
        const name = await this.getInnerText(selectors.opportunities.verificationText);
        expect(name).toContain(oppName);
    }

    public async searchOpportunity(name: string) {
        await this.type(selectors.opportunities.searchInput, "Search", name);
        await this.keyboardAction(selectors.opportunities.searchInput, "Enter", "Input", "Search");
    }

    public async clickOpportunityRecord(name: string) {
        await this.click(selectors.opportunities.opportunityRecordLink(name), name, "Link");
    }

    public async editOpportunity() {
        await this.click(selectors.opportunities.editBtn, "Edit", "Button");
    }

    public async deleteOpportunity() {
        await this.click(selectors.opportunities.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.opportunities.deleteBtn, "Delete", "Button");
        await this.click(selectors.opportunities.deleteBtn, "Confirm Delete", "Button");
    }

    public async closeTAB() {
        await this.click(selectors.opportunities.closeTab, "Close TAB", "Button");
    }
}
