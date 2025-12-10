import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC016: Edit Account', async ({ SalesforceLogin, SalesforceHome, SalesforceAccount }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC016' },
        { type: 'Test Description', description: 'Edits existing account records with updated information' },
        { type: 'Category', description: 'Account Management' }
    );

    const accountName = FakerData.getWord();
    const updatedName = FakerData.getRandomTitle();
    const phone = FakerData.getMobileNumber();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Accounts");
    await SalesforceHome.clickApp("Accounts");
    await SalesforceAccount.searchAccount(accountName);
    // Click on the account record
    await SalesforceAccount.page.locator(`//a[contains(., '${accountName}')]`).click();
    await SalesforceAccount.page.locator("//button[contains(text(), 'Edit')]").click();
    await SalesforceAccount.accountName(updatedName);
    await SalesforceAccount.accountNumber(phone);
    await SalesforceAccount.saveButton();
    await SalesforceAccount.verifiAccountName(updatedName);
});
