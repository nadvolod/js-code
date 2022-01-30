/* eslint-disable no-undef */
describe('Visual checks', () => {
	it('pages render correctly', async () => {
		await browser.url('');
		await browser.execute('/*@visual.init*/', 'Visual Test');
		await browser.execute('/*@visual.snapshot*/', 'Dashboard Page', {
			ignore: '[data-testid="rate-limit"]',
		});

		await browser.url('/login');
		const githubImage = await $('[alt="github-user"]');
		await githubImage.waitForDisplayed();
		await browser.execute('/*@visual.snapshot*/', 'Login Page');

		await browser.url('/foobar');
		//await browser.debug();
		// await browser.execute('sauce: break');
		const button = await $('[data-testid="back-home"]');
		await button.waitForDisplayed();
		await browser.execute('/*@visual.snapshot*/', 'Error Page');

		const result = await browser.execute('/*@visual.end*/');
		expect(result.message).toBeNull();
	});
});
