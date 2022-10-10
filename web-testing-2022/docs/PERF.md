# Performance and accessbility testing

## 🏋️‍♀️Follow setup instructions

1. [Install](https://www.npmjs.com/package/cypress-audit)
2. Add some node events to you `cypress.config.js`

```js
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
```
4. Create a Cypress test that looks like this

```js
/// <reference types="cypress" />

describe('The App', () => {
  it('meets performance and accessibility standards', () => {
    const thresholds = {
      performance: 100,
      accessibility: 100,
      seo: 100,
      pwa: 100,
    };

    // https://github.com/GoogleChrome/lighthouse/blob/main/docs/emulation.md
    // const lighthouseConfig = {
    //   formFactor: 'desktop',
    //   screenEmulation: { disabled: true },
    // };

    cy.visit('/');
    cy.lighthouse(thresholds);
  });
});
```


Stuck? The solution is [here](https://github.com/nadvolod/js-code/pull/42)
