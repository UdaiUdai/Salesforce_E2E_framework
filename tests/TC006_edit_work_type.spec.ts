import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC006: Edit Work Type', async ({ SalesforceLogin, SalesforceHome, SalesforceWorkType }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC006' },
        { type: 'Test Description', description: 'Edits existing Work Type records' },
        { type: 'Category', description: 'Work Type Management' }
    );

    const workTypeName = FakerData.getWord();
    const updatedName = FakerData.getWord();
    const updatedDescription = FakerData.getSentence();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Work Types");
    await SalesforceHome.clickApp("Work Types");
    await SalesforceWorkType.searchWorkType(workTypeName);
    await SalesforceWorkType.clickWorkTypeRecord(workTypeName);
    await SalesforceWorkType.editWorkType();
    await SalesforceWorkType.enterName(updatedName);
    await SalesforceWorkType.enterDescription(updatedDescription);
    await SalesforceWorkType.saveWorkType();
    await SalesforceWorkType.verifyWorkTypeCreation(updatedName);
});
