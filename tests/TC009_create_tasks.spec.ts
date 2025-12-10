import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC009: Create Tasks', async ({ SalesforceLogin, SalesforceHome, SalesforceTask }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC009' },
        { type: 'Test Description', description: 'Creates new task records' },
        { type: 'Category', description: 'Task Management' }
    );

    const subject = FakerData.getWord();
    const description = FakerData.getSentence();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Tasks");
    await SalesforceHome.clickApp("Tasks");
    await SalesforceTask.newButton();
    await SalesforceTask.enterSubject(subject);
    await SalesforceTask.enterDescription(description);
    await SalesforceTask.selectStatus("Not Started");
    await SalesforceTask.selectPriority("Normal");
    await SalesforceTask.enterDueDate("12/31/2025");
    await SalesforceTask.saveTask();
    await SalesforceTask.verifyTaskCreation(subject);
});
