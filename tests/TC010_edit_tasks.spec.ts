import { test } from "../customFixtures/salesForceFixture"
import { FakerData } from "../helpers/fakerUtils"

test('TC010: Edit Tasks', async ({ SalesforceLogin, SalesforceHome, SalesforceTask }) => {
    test.info().annotations.push(
        { type: 'Author', description: 'udai' },
        { type: 'TestCase', description: 'TC010' },
        { type: 'Test Description', description: 'Edits existing task records' },
        { type: 'Category', description: 'Task Management' }
    );

    const subject = FakerData.getWord();
    const updatedSubject = FakerData.getWord();
    const updatedDescription = FakerData.getSentence();

    await SalesforceLogin.salesforceLogin("ADMINLOGIN");
    await SalesforceHome.appLauncher();
    await SalesforceHome.viewAll();
    await SalesforceHome.searchApp("Tasks");
    await SalesforceHome.clickApp("Tasks");
    await SalesforceTask.searchTask(subject);
    await SalesforceTask.clickTaskRecord(subject);
    await SalesforceTask.editTask();
    await SalesforceTask.enterSubject(updatedSubject);
    await SalesforceTask.enterDescription(updatedDescription);
    await SalesforceTask.selectStatus("Completed");
    await SalesforceTask.selectPriority("High");
    await SalesforceTask.saveTask();
    await SalesforceTask.verifyTaskCreation(updatedSubject);
});
