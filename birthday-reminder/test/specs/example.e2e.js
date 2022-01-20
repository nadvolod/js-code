describe('Birthday reminder', () => {
	it('should open', async () => {
		await browser.url(``);
		await expect($('#root')).toBeExisting();
	});
});
