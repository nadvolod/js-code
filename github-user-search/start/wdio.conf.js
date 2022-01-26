const visualOptions = {
	apiKey: process.env.SCREENER_API_KEY,
	projectName: 'github-users',
};
const sauceOptions = {
	username: process.env.SAUCE_USERNAME,
	accesskey: process.env.SAUCE_ACCESS_KEY,
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
				sauceConnectOpts: {
					noSslBumpDomains: 'all',
				},
			},
		],
	],
	specs: ['./test/specs/**/visual.spec.js'],
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
		// //iphone 12 pro
		// {
		// 	browserName: 'safari',
		// 	platformName: 'macOS 11.00',
		// 	browserVersion: 'latest',
		// 	'sauce:options': {
		// 		...sauceOptions,
		// 	},
		// 	'sauce:visual': {
		// 		...visualOptions,
		// 		viewportSize: '390x844',
		// 	},
		// },
		// //Samsung S20
		// //https://yesviz.com/viewport/
		// {
		// 	browserName: 'chrome',
		// 	platformName: 'windows 10',
		// 	browserVersion: 'latest',
		// 	'sauce:options': {
		// 		...sauceOptions,
		// 	},
		// 	'sauce:visual': {
		// 		...visualOptions,
		// 		viewportSize: '360x800',
		// 	},
		// },
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
	reporters: ['dot'],
	mochaOpts: {
		ui: 'bdd',
		//set at least this timeout since visual snapshots can take up to 45 sec
		//https://docs.saucelabs.com/visual/e2e-testing/setup/#useful-settings
		timeout: 180000,
	},
};
