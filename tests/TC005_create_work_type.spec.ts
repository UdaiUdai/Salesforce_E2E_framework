import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC005: Create Work Type', async ({ SalesforceLogin, SalesforceHome, SalesforceWorkType }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC005' },
        { type: 'Test Description', description: 'Creates new Work Type groups with description' },
        { type: 'Category', description: 'Work Type Management' }
    );

    const workTypeName = FakerData.getWord();
    const description = FakerData.getSentence();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Work Types");
    await SalesforceHome.clickApp("Work Types");
    await SalesforceWorkType.newButton();
    await SalesforceWorkType.enterName(workTypeName);
    await SalesforceWorkType.enterDescription(description);
    await SalesforceWorkType.saveWorkType();
    await SalesforceWorkType.verifyWorkTypeCreation(workTypeName);
});
