const { RemoteBrowserTarget } = require('happo.io')

module.exports = {
    apiKey: process.env.HAPPO_API_KEY,
    apiSecret: process.env.HAPPO_API_SECRET,
    project: 'dev-portfolio-tutorial',
    targets: {
        'chrome-1080p': new RemoteBrowserTarget('chrome', {
            viewport: '1920x1080',
        }),
        // all viewports https://viewportsizer.com/devices/
        // 	Samsung Galaxy S10+, S10
        'chrome-galaxy-s10': new RemoteBrowserTarget('chrome', {
            viewport: '360x740',
        }),
        'chrome-650-bug': new RemoteBrowserTarget('chrome', {
            viewport: '650x415',
            scrollStitch: true,
        }),
        // iphone viewports https://yesviz.com/iphones.php
        'safari-1080p': new RemoteBrowserTarget('safari', {
            viewport: '1920x1080',
            freezeAnimations: 'last-frame',
            scrollStitch: true,
        }),
        // iphone 12 pro
        'safari-iphone-12-pro': new RemoteBrowserTarget('safari', {
            viewport: '390x844',
            freezeAnimations: 'last-frame',
            scrollStitch: true,
        }),

        // only works on public urls
        // pages: [{ url: 'http://localhost:3000/', title: 'Home Page' }],
    },
}
