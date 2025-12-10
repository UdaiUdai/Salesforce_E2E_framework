import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC019: Delete Opportunity', async ({ SalesforceLogin, SalesforceHome, SalesforceOpportunity }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC019' },
        { type: 'Test Description', description: 'Deletes opportunity records' },
        { type: 'Category', description: 'Opportunity Management' }
    );

    const opportunityName = FakerData.getWord();
    const amount = FakerData.getRandomNumber(10000, 100000).toString();

    // Create an opportunity first to delete
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
    
    // Now delete the created opportunity
    await SalesforceOpportunity.searchOpportunity(opportunityName);
    await SalesforceOpportunity.clickOpportunityRecord(opportunityName);
    await SalesforceOpportunity.deleteOpportunity();
});
