import { Page, BrowserContext, expect } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class SalesforceTaskPage extends PlaywrightWrapper {

    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async newButton() {
        await this.validateElementVisibility(selectors.tasks.newTaskBtn, "New Button");
        await this.click(selectors.tasks.newTaskBtn, "New", "Button");
    }

    public async enterSubject(value: string) {
        await this.type(selectors.tasks.subjectInput, "Subject", value);
    }

    public async enterDescription(value: string) {
        await this.type(selectors.tasks.descriptionInput, "Description", value);
    }

    public async selectStatus(value: string) {
        await this.click(selectors.tasks.statusDD, "Status", "Dropdown");
        await this.click(selectors.tasks.dropdownValueSelector(value), value, "Option");
    }

    public async selectPriority(value: string) {
        await this.click(selectors.tasks.priorityDD, "Priority", "Dropdown");
        await this.click(selectors.tasks.dropdownValueSelector(value), value, "Option");
    }

    public async enterDueDate(value: string) {
        await this.type(selectors.tasks.dueDateInput, "Due Date", value);
    }

    public async saveTask() {
        await this.click(selectors.tasks.saveBtn, "Save", "Button");
    }

    public async verifyTaskCreation(subject: string) {
        await this.spinnerDisappear();
        const taskSubject = await this.getInnerText(selectors.tasks.verificationText);
        expect(taskSubject).toContain(subject);
    }

    public async searchTask(subject: string) {
        await this.type(selectors.tasks.searchInput, "Search", subject);
        await this.keyboardAction(selectors.tasks.searchInput, "Enter", "Input", "Search");
    }

    public async clickTaskRecord(subject: string) {
        await this.click(selectors.tasks.taskRecordLink(subject), subject, "Link");
    }

    public async editTask() {
        await this.click(selectors.tasks.editBtn, "Edit", "Button");
    }

    public async deleteTask() {
        await this.click(selectors.tasks.deleteActionBtn, "Delete Action", "Button");
        await this.click(selectors.tasks.deleteBtn, "Delete", "Button");
        await this.click(selectors.tasks.deleteConfirm, "Confirm Delete", "Button");
    }

    public async closeTAB() {
        await this.click(selectors.tasks.closeTab, "Close TAB", "Button");
    }
}
