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
    specs: ['./test/specs/**/functional*.js'],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 10,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    capabilities: [
        //Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
        {
            browserName: 'chrome',
            platformName: 'windows 10',
            browserVersion: 'latest',
            acceptInsecureCerts: true,
            'sauce:options': {
                build: `Sauce Labs W3C Desktop build-${new Date().getTime()}`,
                screenResolution: '1440x900',
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
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
    },
};
