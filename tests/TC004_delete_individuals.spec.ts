import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC004: Delete Individuals', async ({ SalesforceLogin, SalesforceHome, SalesforceIndividual }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC004' },
        { type: 'Test Description', description: 'Deletes individual records' },
        { type: 'Category', description: 'Individual Records Management' }
    );

    const firstName = FakerData.getFirstName();
    const lastName = FakerData.getLastName();

    // Create an individual first to delete
    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Individuals");
    await SalesforceHome.clickApp("Individuals");
    await SalesforceIndividual.newButton();
    await SalesforceIndividual.selectSalutation("Mr.");
    await SalesforceIndividual.enterFirstName(firstName);
    await SalesforceIndividual.enterLastName(lastName);
    await SalesforceIndividual.saveIndividual();
    await SalesforceIndividual.verifyIndividualCreation(firstName);
    
    // Now delete the created individual
    await SalesforceIndividual.searchIndividual(firstName);
    await SalesforceIndividual.clickIndividualRecord(firstName);
    await SalesforceIndividual.deleteIndividual();
});
