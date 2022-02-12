const { RemoteBrowserTarget } = require('happo.io');

module.exports = {
	apiKey: process.env.HAPPO_API_KEY,
	apiSecret: process.env.HAPPO_API_SECRET,

	targets: {
		'chrome-desktop': new RemoteBrowserTarget('chrome', {
			viewport: '1920x1080',
		}),
		// all viewports https://viewportsizer.com/devices/
		// 	Samsung Galaxy S10+, S10
		'chrome-mobile': new RemoteBrowserTarget('chrome', {
			viewport: '360x740',
		}),
		// iphone viewports https://yesviz.com/iphones.php
		'safari-desktop': new RemoteBrowserTarget('safari', {
			viewport: '1920x1080',
		}),
		// iphone 12 pro
		'safari-mobile': new RemoteBrowserTarget('safari', {
			viewport: '390x844',
		}),
	},
	pages: [{ url: 'http://localhost:3000/', title: 'Home Page' }],
};
