/* eslint-disable no-undef */
describe('Functional test', () => {
    it('pages render correctly', async () => {
        await browser.url('');
        //in all snapshots, we will ignore these locators
        // await browser.execute('/*@visual.init*/', 'Visual Test');
        // await browser.execute('/*@visual.snapshot*/', 'Dashboard Page');

        await browser.url('/login');
        // await browser.execute('/*@visual.snapshot*/', 'Login Page');

        await browser.url('/foobar');
        //await browser.debug();
        // await browser.execute('sauce: break');
        const button = await $('[data-testid="back-home"]');
        await button.waitForDisplayed();
        // await browser.execute('/*@visual.snapshot*/', 'Error Page');

        const result = await browser.execute('/*@visual.end*/');
        // expect(result.message).toBeNull();
    });
});
