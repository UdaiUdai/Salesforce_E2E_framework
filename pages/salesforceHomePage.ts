import { BrowserContext, Page } from "@playwright/test";
import { selectors } from "./selectors";
import { PlaywrightWrapper } from "../helpers/playwright";

export class SalesforceHomePage extends PlaywrightWrapper {
    constructor(page: Page, context: BrowserContext) {
        super(page, context);
    }

    public async appLauncher() {
        await this.validateElementVisibility(selectors.home.appLauncherIcon, "App Launcher");
        await this.click(selectors.home.appLauncherIcon, "App Launcher", "Button");
    }

    public async viewAll() {
        await this.wait("minWait")
        await this.waitSelector(selectors.home.viewAllBtn);
        await this.page.locator(selectors.home.viewAllBtn).highlight();
        await this.click(selectors.home.viewAllBtn, "View All", "Button");

    }

    public async searchApp(value: string) {
        await this.type(selectors.home.appSearchInput, "Search Field", value)
    }

    public async clickApp(data: string) {
        await this.click(selectors.home.selectApp(data), data, "Button")

    }

    public async clickMobilePublisher() {
        await this.childTab("//span[text()='Learn More']");
    }


}
