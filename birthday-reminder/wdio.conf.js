const visualOptions = {
	apiKey: process.env.SCREENER_API_KEY,
	projectName: 'ctm2022',
};
const sauceOptions = {
	username: process.env.SAUCE_USERNAME,
	accesskey: process.env.SAUCE_ACCESS_KEY,
	build: `Visual Tests-${new Date().getTime()}`,
	//enable HAR files
	extendedDebugging: true,
	capturePerformance: true,
};
exports.config = {
	region: process.env.REGION || 'us',
	services: [
		[
			'sauce',
			{
				sauceConnect: true,
			},
		],
	],
	specs: ['./test/specs/**/*.js'],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	maxInstances: 10,
	hostname: 'hub.screener.io',
	port: 443,
	protocol: 'https',
	path: '/wd/hub',
	capabilities: [
		//Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
		{
			browserName: 'chrome',
			platformName: 'windows 10',
			browserVersion: 'latest',
			'sauce:options': {
				...sauceOptions,
			},
			'sauce:visual': {
				...visualOptions,
				viewportSize: '1366x768',
			},
		},
	],
	//
	// ===================
	// Test Configurations
	// ===================
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'error',
	bail: 0,
	baseUrl: 'http://localhost:3000',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	framework: 'mocha',
	reporters: ['spec'],
	mochaOpts: {
		ui: 'bdd',
		timeout: 180000,
	},
};
