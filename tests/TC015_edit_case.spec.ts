import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC015: Edit Case', async ({ SalesforceLogin, SalesforceHome, SalesforceCase }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC015' },
        { type: 'Test Description', description: 'Edits existing case records' },
        { type: 'Category', description: 'Case Management' }
    );

    const firstName = FakerData.getFirstName();
    const lastName = FakerData.getLastName();
    const updatedSubject = FakerData.getWord();
    const updatedDescription = FakerData.getSentence();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Cases");
    await SalesforceHome.clickApp("Cases");
    await SalesforceCase.searchCase(firstName);
    await SalesforceCase.clickCaseRecord(firstName);
    await SalesforceCase.editCase();
    await SalesforceCase.selectStatus("Open");
    await SalesforceCase.selectCaseOrigin("Email");
    await SalesforceCase.enterSubject(updatedSubject);
    await SalesforceCase.enterDescription(updatedDescription);
    await SalesforceCase.saveCase();
});
