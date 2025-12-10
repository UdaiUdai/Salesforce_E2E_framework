import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC022: Create Lead', async ({ SalesforceLogin, SalesforceHome, SalesforceLead }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC022' },
        { type: 'Test Description', description: 'Creates new lead records' },
        { type: 'Category', description: 'Lead Management' }
    );

    const firstName = FakerData.getFirstName();
    const lastName = FakerData.getLastName();
    const company = FakerData.getCompanyName();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Leads");
    await SalesforceHome.clickApp("Leads");
    await SalesforceLead.newButton();
    await SalesforceLead.selectSalutation("Mr.");
    await SalesforceLead.enterFirstName(firstName);
    await SalesforceLead.enterLastName(lastName);
    await SalesforceLead.enterCompany(company);
    await SalesforceLead.saveLead();
    await SalesforceLead.verifyLeadCreation(firstName);
});
