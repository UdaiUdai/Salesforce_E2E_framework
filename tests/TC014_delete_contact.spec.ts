import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC014: Delete Contact', async ({ SalesforceLogin, SalesforceHome, SalesforceContact }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC014' },
        { type: 'Test Description', description: 'Deletes contact records from Salesforce' },
        { type: 'Category', description: 'Contact Management' }
    );

    const firstName = FakerData.getFirstName();
    const lastName = FakerData.getLastName();
    const email = FakerData.getEmail();

    // Create a contact first to delete
    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Contacts");
    await SalesforceHome.clickApp("Contacts");
    await SalesforceContact.newButton();
    await SalesforceContact.selectSalutation("Mr.");
    await SalesforceContact.enterFirstName(firstName);
    await SalesforceContact.enterLastName(lastName);
    await SalesforceContact.enterEmail(email);
    await SalesforceContact.saveContact();
    await SalesforceContact.verifyContactCreation(firstName);
    
    // Now delete the created contact
    await SalesforceContact.searchContact(firstName);
    await SalesforceContact.clickContactRecord(firstName);
    await SalesforceContact.deleteContact();
});
