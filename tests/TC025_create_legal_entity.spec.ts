import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC025: Create Legal Entity', async ({ SalesforceLogin, SalesforceHome, SalesforceLegalEntity }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC025' },
        { type: 'Test Description', description: 'Creates legal entity records' },
        { type: 'Category', description: 'Legal Entity Management' }
    );

    const entityName = FakerData.getRandomTitle();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Legal Entities");
    await SalesforceHome.clickApp("Legal Entities");
    await SalesforceLegalEntity.newButton();
    await SalesforceLegalEntity.enterName(entityName);
    await SalesforceLegalEntity.selectStatus("Active");
    await SalesforceLegalEntity.saveLegalEntity();
    await SalesforceLegalEntity.verifyLegalEntityCreation(entityName);
});
