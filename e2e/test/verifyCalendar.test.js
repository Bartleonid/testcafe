import activityPage from '../page/activityPage/activityPage';
import URL from '../URL';
import checkConsoleMessages from '../logger/check-console-messages';
import BasePage from '../page/basePage';
const basePage = new BasePage();

fixture `Fixture before test`
    .page(URL.ActivityPage)
    .beforeEach(async t => {
        await t.maximizeWindow();
        await basePage.acceptCookie();
        console.log("----------------------------------------");
    })
    .afterEach(() => checkConsoleMessages());

test('Verify available tickets', async t => {
    console.log("Test started");
    console.log("----------------------------------------");
    await activityPage.openCalendar();
    await activityPage.chooseRandomAvailableDateWithin(1);
    await activityPage.chooseTicketOption(1);
    await activityPage.chooseTimeSlot(1);
});