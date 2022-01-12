describe('Visual checks', () => {
    it('pages render correctly', async () => {
        await browser.url(``);
        //in all snapshots, we will ignore these locators
        await browser.execute('/*@visual.init*/', 'Visual Test');
        await browser.execute('/*@visual.snapshot*/', 'Dashboard Page');

        await browser.url(`/login`);
        await browser.execute('/*@visual.snapshot*/', 'Login Page');

        await browser.url(`/foobar`);
        const button = await $('[data-testid=back-home]');
        button.waitForExist({ timeout: 5000 });
        await browser.execute('/*@visual.snapshot*/', 'Error Page');

        const result = await browser.execute('/*@visual.end*/');
        expect(result.message).toBeNull();
    });
});
