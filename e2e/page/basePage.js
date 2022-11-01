import { Selector, t } from "testcafe";
import { getRandomIntBetween } from "../utility/utility";
import TIMEOUT from "../utility/timeouts";

export default class BasePage {
    async openPage(url) {
        test('Navigating to the page' + url, async t => {
            await t
                .navigateTo(url);
        });
    }

    async acceptCookie() {
        try {
            const acceptCookie = Selector(() => document.querySelector('body > msm-cookie-banner').shadowRoot.querySelector('[data-test="cookie-banner__accept-cookies"]'));
            await t.click(acceptCookie);
            console.log("Cookie is accepted");
        } catch (error) {
            console.log(error + " Cookie is not accepted");
        }
    }

    async verifyPageTitle(headerSelector, expctedTitle) {
        const header = Selector(headerSelector);
        await t.expect(header.innerText).eql(expctedTitle);
    }

    async waitForElementToBeVisible(selector) {
        try {
            await this.elementExists(selector);
            const element = Selector(selector);
            // await Selector(element, { visibilityCheck: true }).ok;
            await element.with({ visibilityCheck: true }, { timeout: TIMEOUT.MEDIUM })();
        } catch (error) {
            console.log(error + " Element " + selector + " is not visible");
        }
    }

    async elementExists(selector, log = false) {
        try {
            const element = Selector(selector);
            await t.expect(element.exists).ok({ timeout: TIMEOUT.MEDIUM });
            if (log) {
                console.log("Element " + selector + " exists");
            }
        } catch (error) {
            console.log(error + " Element " + selector + " doesn't exist");
        }
    }

    async getText(selector) {
        let text;
        try {
            await this.waitForElementToBeVisible(selector);
            const element = Selector(selector);
            text = await element.innerText;
            console.log("Text found by " + selector + "= " + text);
        } catch (error) {
            console.log(error + " Could not get text from " + selector);
        }
        return text;
    }

    async click(selector) {
        try {
            this.waitForElementToBeVisible(selector);
            await t.click(selector, { timeout: TIMEOUT.MEDIUM });
            console.log("Element " + selector + " is clicked");
        } catch (error) {
            console.log(error + " Element " + selector + " is not clicked");
        }
    }

    async totalNumberOfElementsCounted(selector) {
        try {
            const element = Selector(selector);
            await this.waitForElementToBeVisible(selector);
            const count = await element.count;
            console.log("Element " + selector + " is found");
            console.log("Total number of elements by " + selector + " found = " + count);
            return count;
        } catch (error) {
            console.log(error + " Element " + selector + " is not found");
        }
        return null;
    }

    async clickRandomElement(selector, startRange, endRange = 0) {
        let index = null;
        try {
            await this.waitForElementToBeVisible(selector);
            endRange = await this.totalNumberOfElementsCounted(selector);
            index = getRandomIntBetween(startRange, endRange);
            const randomElement = Selector(selector).nth(index);
            console.log("Clicking on element " + selector + " by random number = " + index + " with having text = " + await randomElement.innerText);
            await t.click(randomElement, { timeout: TIMEOUT.MEDIUM });
        } catch (error) {
            console.log(error + " Element " + selector + " is not clicked");
        }
        return index;
    }
}