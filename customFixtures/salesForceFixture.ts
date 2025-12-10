import { test as baseTest } from '@playwright/test'
import * as path from 'path'
import { SalesforceHomePage } from '../pages/salesforceHomePage'
import { SalesforceLeadPage } from '../pages/salesforceLeadPage'
import { SalesforceAccountPage } from '../pages/salesforceAccountPage'
import { SalesforceLoginPage } from '../pages/salesforceLogin'
import { SalesforceMobilePublisherPage } from '../pages/salesforceMobilePublisher'
import { SalesforceCasePage } from '../pages/salesforceCasePage'
import { SalesforceIndividualPage } from '../pages/salesforceIndividualPage'
import { SalesforceContactPage } from '../pages/salesforceContactPage'
import { SalesforceOpportunityPage } from '../pages/salesforceOpportunityPage'
import { SalesforceTaskPage } from '../pages/salesforceTaskPage'
import { SalesforceWorkTypePage } from '../pages/salesforceWorkTypePage'
import { SalesforceLegalEntityPage } from '../pages/salesforceLegalEntityPage'

type salesForceFixture = {
    SalesforceHome: SalesforceHomePage
    SalesforceLead: SalesforceLeadPage
    SalesforceAccount: SalesforceAccountPage
    SalesforceLogin: SalesforceLoginPage
    SalesforceMobilePublisher: SalesforceMobilePublisherPage
    SalesforceCase: SalesforceCasePage
    SalesforceIndividual: SalesforceIndividualPage
    SalesforceContact: SalesforceContactPage
    SalesforceOpportunity: SalesforceOpportunityPage
    SalesforceTask: SalesforceTaskPage
    SalesforceWorkType: SalesforceWorkTypePage
    SalesforceLegalEntity: SalesforceLegalEntityPage
}

// Apply storage state directly using baseTest.use()
baseTest.use({
    storageState: path.join(__dirname, '../logins/salesforceLogin.json'),
});

export const test = baseTest.extend<salesForceFixture>({

    SalesforceLogin: async ({ page, context }, use) => {
        const salesforceLogin = new SalesforceLoginPage(page, context);
        await use(salesforceLogin);
    },

    SalesforceHome: async ({ page, context }, use) => {
        const SalesforceHome = new SalesforceHomePage(page, context);
        await use(SalesforceHome);
    },

    SalesforceLead: async ({ page, context }, use) => {
        const SalesforceLead = new SalesforceLeadPage(page, context);
        await use(SalesforceLead)
    },

    SalesforceAccount: async ({ page, context }, use) => {
        const SalesforceAccount = new SalesforceAccountPage(page, context);
        await use(SalesforceAccount)
    },
    
    SalesforceMobilePublisher: async ({ page, context }, use) => {
        const SalesforceMobilePublisher = new SalesforceMobilePublisherPage(page, context);
        await use(SalesforceMobilePublisher);
    },

    SalesforceCase: async ({ page, context }, use) => {
        const SalesforceCase = new SalesforceCasePage(page, context);
        await use(SalesforceCase);
    },

    SalesforceIndividual: async ({ page, context }, use) => {
        const SalesforceIndividual = new SalesforceIndividualPage(page, context);
        await use(SalesforceIndividual);
    },

    SalesforceContact: async ({ page, context }, use) => {
        const SalesforceContact = new SalesforceContactPage(page, context);
        await use(SalesforceContact);
    },

    SalesforceOpportunity: async ({ page, context }, use) => {
        const SalesforceOpportunity = new SalesforceOpportunityPage(page, context);
        await use(SalesforceOpportunity);
    },

    SalesforceTask: async ({ page, context }, use) => {
        const SalesforceTask = new SalesforceTaskPage(page, context);
        await use(SalesforceTask);
    },

    SalesforceWorkType: async ({ page, context }, use) => {
        const SalesforceWorkType = new SalesforceWorkTypePage(page, context);
        await use(SalesforceWorkType);
    },

    SalesforceLegalEntity: async ({ page, context }, use) => {
        const SalesforceLegalEntity = new SalesforceLegalEntityPage(page, context);
        await use(SalesforceLegalEntity);
    },

})

// Hook to load storage state (cookies) from file for all tests
// test.beforeEach(async ({ context }) => {
//     const storageState = require('../logins/salesforceLogin.json');
//     if (storageState.cookies) {
//         await context.addCookies(storageState.cookies);
//     }
// });
/* test.afterEach(async ({}, testInfo) => {
    jiraIssueKey = await logADefectInJira(testInfo);
});

test.afterAll(async ({}) => {
   const filePath= process.cwd()
   const resultFile=await glob(filePath+"/test-results",{absolute:true})
   console.log(resultFile)
    if (jiraIssueKey && resultFile.length> 0) {
        await updateJiraIssue(jiraIssueKey,resultFile[0]); // Replace with the actual folder path
    }
}); */

