import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class SalesforceLegalEntityPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        await this.validateElementVisibility(selectors.legalEntity.newBtn, "New Button");
        await this.click(selectors.legalEntity.newBtn, "New", "Button");
    }

    public async enterName(value: string) {
        await this.type(selectors.legalEntity.nameInput, "Name", value);
    }

    public async selectStatus(value: string) {
        await this.click(selectors.legalEntity.statusDD, "Status", "Dropdown");
        await this.click(selectors.legalEntity.dropdownValueSelector(value), value, "Option");
    }

    public async saveLegalEntity() {
        await this.click(selectors.legalEntity.nameInput, "Save", "Button");
    }

    public async verifyLegalEntityCreation(name: string) {
        await this.spinnerDisappear();
        const entityName = await this.getInnerText(selectors.legalEntity.verificationText);
        expect(entityName).toContain(name);
    }

    public async searchLegalEntity(name: string) {
        await this.type(selectors.legalEntity.searchInput, "Search", name);
        await this.keyboardAction(selectors.legalEntity.searchInput, "Enter", "Input", "Search");
    }

    public async clickLegalEntityRecord(name: string) {
        await this.click(selectors.legalEntity.legalEntityRecordLink(name), name, "Link");
    }

    public async editLegalEntity() {
        await this.click(selectors.legalEntity.editBtn, "Edit", "Button");
    }

    public async deleteLegalEntity() {
        await this.click(selectors.legalEntity.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.legalEntity.deleteBtn, "Delete", "Button");
        await this.click(selectors.legalEntity.deleteBtn, "Confirm Delete", "Button");
    }

    public async closeTAB() {
        await this.click(selectors.legalEntity.closeTab, "Close TAB", "Button");
    }
}
