import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC011: Delete Tasks', async ({ SalesforceLogin, SalesforceHome, SalesforceTask }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC011' },
        { type: 'Test Description', description: 'Deletes task records' },
        { type: 'Category', description: 'Task Management' }
    );

    const subject = FakerData.getWord();
    const description = FakerData.getSentence();

    // Create a task first to delete
    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Tasks");
    await SalesforceHome.clickApp("Tasks");
    await SalesforceTask.newButton();
    await SalesforceTask.enterSubject(subject);
    await SalesforceTask.enterDescription(description);
    await SalesforceTask.selectStatus("Not Started");
    await SalesforceTask.saveTask();
    await SalesforceTask.verifyTaskCreation(subject);
    
    // Now delete the created task
    await SalesforceTask.searchTask(subject);
    await SalesforceTask.clickTaskRecord(subject);
    await SalesforceTask.deleteTask();
});
