import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"
import * as fs from 'fs'
import * as path from 'path'
import { Csv } from "../helpers/csvUtil";

test('TC002: Create Individuals', async ({ SalesforceLogin, SalesforceHome, SalesforceIndividual }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC002' },
        { type: 'Test Description', description: 'Creates individual records and saves data to CSV' },
        { type: 'Category', description: 'Individual Records Management' }
    );

    const firstName = FakerData.getFirstName();
    const lastName = FakerData.getLastName();
    const csvFilePath= await Csv.create_csv_file("individual")

    // Navigate and create individual
    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Individuals");
    await SalesforceHome.clickApp("Individuals");
    await SalesforceIndividual.newButton();
    await SalesforceIndividual.selectSalutation("Mr.");
    await SalesforceIndividual.enterFirstName(firstName);
    await SalesforceIndividual.enterLastName(lastName);
    await SalesforceIndividual.saveIndividual();
    await SalesforceIndividual.verifyIndividualCreation(firstName);

    // Append created individual data to CSV
    const csvData = `${firstName},${lastName},Mr.\n`;
    fs.appendFileSync(csvFilePath, csvData);
    console.log(`Updated individuals.csv with: ${firstName} ${lastName}`);
});
