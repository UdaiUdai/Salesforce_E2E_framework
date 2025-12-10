import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC023: Edit Lead', async ({ SalesforceLogin, SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC023' },
        { type: 'Test Description', description: 'Edits existing lead records' },
        { type: 'Category', description: 'Lead Management' }
    );

    const firstName = FakerData.getFirstName();
    const updatedFirstName = FakerData.getFirstName();
    const updatedLastName = FakerData.getLastName();
    const updatedCompany = FakerData.getCompanyName();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Leads");
    await SalesforceHome.clickApp("Leads");
    await SalesforceLead.searchLead(firstName);
    await SalesforceLead.clickLeadRecord(firstName);
    await SalesforceLead.editLead();
    await SalesforceLead.selectSalutation("Ms.");
    await SalesforceLead.enterFirstName(updatedFirstName);
    await SalesforceLead.enterLastName(updatedLastName);
    await SalesforceLead.enterCompany(updatedCompany);
    await SalesforceLead.saveLead();
    await SalesforceLead.verifyLeadCreation(updatedFirstName);
});
