const { defineConfig } = require('cypress');
const { lighthouse, prepareAudit } = require('cypress-audit');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        on('before:browser:launch', (browser = {}, launchOptions) => {
          prepareAudit(launchOptions);
        });

        on('task', {
          lighthouse: lighthouse(),
        });
    },
    baseUrl: 'http://localhost:3000',
  },
});
