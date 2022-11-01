import { t } from 'testcafe';

export default async function() {
    const { error, log } = await t.getBrowserConsoleMessages();
    console.log(log);
    console.log(error);
}