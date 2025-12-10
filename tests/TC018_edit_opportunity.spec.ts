import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC018: Edit Opportunity', async ({ SalesforceLogin, SalesforceHome, SalesforceOpportunity }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC018' },
        { type: 'Test Description', description: 'Edits existing opportunity records' },
        { type: 'Category', description: 'Opportunity Management' }
    );

    const opportunityName = FakerData.getWord();
    const updatedAmount = FakerData.getRandomNumber(50000, 200000).toString();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Opportunities");
    await SalesforceHome.clickApp("Opportunities");
    await SalesforceOpportunity.searchOpportunity(opportunityName);
    await SalesforceOpportunity.clickOpportunityRecord(opportunityName);
    await SalesforceOpportunity.editOpportunity();
    await SalesforceOpportunity.selectStage("Needs Analysis");
    await SalesforceOpportunity.enterAmount(updatedAmount);
    await SalesforceOpportunity.saveOpportunity();
    await SalesforceOpportunity.verifyOpportunityCreation(opportunityName);
});
