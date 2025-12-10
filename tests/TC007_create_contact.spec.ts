import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC007: Create Contact', async ({ SalesforceLogin, SalesforceHome, SalesforceContact }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC007' },
        { type: 'Test Description', description: 'Creates new contact records' },
        { type: 'Category', description: 'Contact Management' }
    );

    const firstName = FakerData.getFirstName();
    const lastName = FakerData.getLastName();
    const email = FakerData.getEmail();
    const phone = FakerData.getMobileNumber();

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
    await SalesforceContact.enterPhone(phone);
    await SalesforceContact.saveContact();
    await SalesforceContact.verifyContactCreation(firstName);
});
