import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class SalesforceWorkTypePage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        await this.validateElementVisibility(selectors.workTypeGroup.nameInput, "New Button");
        await this.click(selectors.workTypeGroup.newWorkTypeGroupBtn, "New", "Button");
    }

    public async enterName(value: string) {
        await this.type(selectors.workTypes.nameInput, "Name", value);
    }

    public async enterDescription(value: string) {
        await this.type(selectors.workTypes.descriptionInput, "Description", value);
    }

    public async saveWorkType() {
        await this.click(selectors.workTypeGroup.saveBtn, "Save", "Button");
    }

    public async verifyWorkTypeCreation(name: string) {
        await this.spinnerDisappear();
        const workTypeName = await this.getInnerText(selectors.workTypes.verificationText);
        expect(workTypeName).toContain(name);
    }

    public async searchWorkType(name: string) {
        await this.type(selectors.workTypes.searchInput, "Search", name);
        await this.keyboardAction(selectors.workTypes.searchInput, "Enter", "Input", "Search");
    }

    public async clickWorkTypeRecord(name: string) {
        await this.click(selectors.workTypes.workTypeRecordLink(name), name, "Link");
    }

    public async editWorkType() {
        await this.click(selectors.workTypes.editBtn, "Edit", "Button");
    }

    public async deleteWorkType() {
        await this.click(selectors.workTypes.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.workTypeGroup.deleteBtn, "Delete", "Button");
        await this.click(selectors.workTypeGroup.deleteBtn, "Confirm Delete", "Button");
    }

    public async closeTAB() {
        await this.click(selectors.workTypes.closeTab, "Close TAB", "Button");
    }
}
