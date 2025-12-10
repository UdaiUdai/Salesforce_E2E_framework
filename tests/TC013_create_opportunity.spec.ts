import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC013: Create Opportunity', async ({ SalesforceLogin, SalesforceHome, SalesforceOpportunity }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC013' },
        { type: 'Test Description', description: 'Creates opportunity records' },
        { type: 'Category', description: 'Opportunity Management' }
    );

    const opportunityName = FakerData.getWord();
    const amount = FakerData.getRandomNumber(10000, 100000).toString();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Opportunities");
    await SalesforceHome.clickApp("Opportunities");
    await SalesforceOpportunity.newButton();
    await SalesforceOpportunity.enterOpportunityName(opportunityName);
    await SalesforceOpportunity.selectStage("Prospecting");
    await SalesforceOpportunity.enterCloseDate("12/31/2025");
    await SalesforceOpportunity.enterAmount(amount);
    await SalesforceOpportunity.saveOpportunity();
    await SalesforceOpportunity.verifyOpportunityCreation(opportunityName);
});
