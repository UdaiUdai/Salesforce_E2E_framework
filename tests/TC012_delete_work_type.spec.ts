import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC012: Delete Work Type', async ({ SalesforceLogin, SalesforceHome, SalesforceWorkType }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC012' },
        { type: 'Test Description', description: 'Deletes Work Type records' },
        { type: 'Category', description: 'Work Type Management' }
    );

    const workTypeName = FakerData.getWord();
    const description = FakerData.getSentence();

    // Create a work type first to delete
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
    
    // Now delete the created work type
    await SalesforceWorkType.searchWorkType(workTypeName);
    await SalesforceWorkType.clickWorkTypeRecord(workTypeName);
    await SalesforceWorkType.deleteWorkType();
});
