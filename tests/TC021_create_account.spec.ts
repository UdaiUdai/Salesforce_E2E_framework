import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"
import { readDataFromCSV } from '../helpers/csvUtil';
import { updateJSONFile } from "../helpers/jsonDataHandler";


const csvFilePath = './data/accounts.csv';

test('TC021: Create Account', async ({ SalesforceLogin, SalesforceHome, SalesforceAccount }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC021' },
        { type: 'Test Description', description: 'Verify that a new Account is created successfully in Salesforce' },
        { type: 'Category', description: 'Account Management' },
        { type: 'Type', description: 'Smoke' }
    );

    const data = await readDataFromCSV(csvFilePath);

    for(const row of data) {
        const { Rating, Type, Industry, Ownership, BillingStreet, BillingCity, PostalCode, BillingState, BillingCountry } = row;
        const acctName = FakerData.getRandomTitle();
        //updateJSONFile<accountData>("../data/accountdata.json", { TC021: acctName});
        
        await SalesforceLogin.salesforceLogin("ADMINLOGIN");
        await SalesforceHome.appLauncher();
        await SalesforceHome.viewAll();
        await SalesforceHome.searchApp("Accounts");
        await SalesforceHome.clickApp("Accounts");
        await SalesforceAccount.newButton();
        await SalesforceAccount.accountName(acctName);
        await SalesforceAccount.accountNumber(FakerData.getMobileNumber());
        await SalesforceAccount.ratingDropdown(Rating);
        await SalesforceAccount.accountType(Type);
        await SalesforceAccount.industry(Industry);
        await SalesforceAccount.ownerShip(Ownership);
        await SalesforceAccount.billingStreet(BillingStreet);
        await SalesforceAccount.billingCity(BillingCity);
        await SalesforceAccount.postalCode(PostalCode);
        await SalesforceAccount.billingState(BillingState);
        await SalesforceAccount.billingCountry(BillingCountry);
        await SalesforceAccount.saveButton();
        await SalesforceAccount.verifiAccountName(acctName);
    }
});
