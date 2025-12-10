import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC024: Edit Legal Entity', async ({ SalesforceLogin, SalesforceHome, SalesforceLegalEntity }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC024' },
        { type: 'Test Description', description: 'Edits legal entity records' },
        { type: 'Category', description: 'Legal Entity Management' }
    );

    const entityName = FakerData.getWord();
    const updatedName = FakerData.getRandomTitle();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Legal Entities");
    await SalesforceHome.clickApp("Legal Entities");
    await SalesforceLegalEntity.searchLegalEntity(entityName);
    await SalesforceLegalEntity.clickLegalEntityRecord(entityName);
    await SalesforceLegalEntity.editLegalEntity();
    await SalesforceLegalEntity.enterName(updatedName);
    await SalesforceLegalEntity.selectStatus("Active");
    await SalesforceLegalEntity.saveLegalEntity();
    await SalesforceLegalEntity.verifyLegalEntityCreation(updatedName);
});
