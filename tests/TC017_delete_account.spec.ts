import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC017: Delete Account', async ({ SalesforceLogin, SalesforceHome, SalesforceAccount }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC017' },
        { type: 'Test Description', description: 'Delete account records' },
        { type: 'Category', description: 'Account Management' }
    );

    const accountName = FakerData.getRandomTitle();

    // Create an account first to delete
    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Accounts");
    await SalesforceHome.clickApp("Accounts");
    await SalesforceAccount.newButton();
    await SalesforceAccount.accountName(accountName);
    await SalesforceAccount.accountNumber(FakerData.getMobileNumber());
    await SalesforceAccount.saveButton();
    await SalesforceAccount.verifiAccountName(accountName);
    
    // Now delete the created account
    await SalesforceAccount.searchAccount(accountName);
    await SalesforceAccount.page.locator(`//a[contains(., '${accountName}')]`).click();
    await SalesforceAccount.page.locator("button[title='Delete']").click();
    await SalesforceAccount.page.locator("span:text-is('Delete')").click();
    await SalesforceAccount.page.locator("//button/span[text()='Delete']").click();
});
