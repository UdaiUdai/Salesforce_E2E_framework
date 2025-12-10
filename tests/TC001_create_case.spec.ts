import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC001: Create New Case', async ({ SalesforceLogin, SalesforceHome, SalesforceCase }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC001' },
        { type: 'Test Description', description: 'Creates and verifies a new Salesforce Case using Excel data' },
        { type: 'Category', description: 'Case Management' }
    );

    const firstName = FakerData.getFirstName();
    const lastName = FakerData.getLastName();
    const subject = FakerData.getWord();
    const description = FakerData.getSentence();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Cases");
    await SalesforceHome.clickApp("Cases");
    await SalesforceCase.newButton();
    await SalesforceCase.newContactInCase();
    await SalesforceCase.selectSalutation("Mr.");
    await SalesforceCase.enterFirstName(firstName);
    await SalesforceCase.enterLastName(lastName);
    await SalesforceCase.saveContact();
    await SalesforceCase.selectStatus("New");
    await SalesforceCase.selectCaseOrigin("Phone");
    await SalesforceCase.enterSubject(subject);
    await SalesforceCase.enterDescription(description);
    await SalesforceCase.saveCase();
    await SalesforceCase.verifyCaseCreation(firstName);
});
