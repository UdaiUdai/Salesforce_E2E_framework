import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC008: Edit Contact', async ({ SalesforceLogin, SalesforceHome, SalesforceContact }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC008' },
        { type: 'Test Description', description: 'Edits existing contact records' },
        { type: 'Category', description: 'Contact Management' }
    );

    const firstName = FakerData.getFirstName();
    const updatedFirstName = FakerData.getFirstName();
    const updatedLastName = FakerData.getLastName();
    const updatedEmail = FakerData.getEmail();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Contacts");
    await SalesforceHome.clickApp("Contacts");
    await SalesforceContact.searchContact(firstName);
    await SalesforceContact.clickContactRecord(firstName);
    await SalesforceContact.editContact();
    await SalesforceContact.selectSalutation("Ms.");
    await SalesforceContact.enterFirstName(updatedFirstName);
    await SalesforceContact.enterLastName(updatedLastName);
    await SalesforceContact.enterEmail(updatedEmail);
    await SalesforceContact.saveContact();
    await SalesforceContact.verifyContactCreation(updatedFirstName);
});
