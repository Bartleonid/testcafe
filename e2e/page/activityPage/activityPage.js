import { t } from "testcafe";
import BasePage from "../basePage";
import $ from "./activitySelectors";
class ActivityPage extends BasePage {

    async openCalendar() {
        await this.click($.calendarDropdown);
        await this.elementExists($.calendar, true);
    }

    async chooseRandomAvailableDateWithin(startRange) {
        await this.clickRandomElement($.date, startRange);
    }

    async chooseTicketOption(startRange) {
        const option = await this.clickRandomElement($.ticketOption, startRange);
        const text = await this.getText($.ticketOption);
        if (option == 1) {
            await t.expect(text).contains("Skip-the-line entrance (with Musement assistance)");
        } else {
            await t.expect(text).contains("Skip-the-line entrance + audio guide (with Musement assistance)");
        }
    }

    async chooseTimeSlot(startRange) {
        await this.click($.timeSlotDropdown);
        const text = await this.getText($.timeSlotDropdown)
        await t.expect(text).contains("Time");
        await this.clickRandomElement($.timeSlot, startRange);
    }

}

export default new ActivityPage();