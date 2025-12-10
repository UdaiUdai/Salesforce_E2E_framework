import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC003: Edit Individuals', async ({ SalesforceLogin, SalesforceHome, SalesforceIndividual }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC003' },
        { type: 'Test Description', description: 'Edits and updates existing individual records' },
        { type: 'Category', description: 'Individual Records Management' }
    );

    const firstName = FakerData.getFirstName();
    const updatedFirstName = FakerData.getFirstName();
    const updatedLastName = FakerData.getLastName();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Individuals");
    await SalesforceHome.clickApp("Individuals");
    await SalesforceIndividual.searchIndividual(firstName);
    await SalesforceIndividual.clickIndividualRecord(firstName);
    await SalesforceIndividual.editIndividual();
    await SalesforceIndividual.selectSalutation("Ms.");
    await SalesforceIndividual.enterFirstName(updatedFirstName);
    await SalesforceIndividual.enterLastName(updatedLastName);
    await SalesforceIndividual.saveIndividual();
    await SalesforceIndividual.verifyIndividualCreation(updatedFirstName);
});
