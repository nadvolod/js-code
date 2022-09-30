const { defineConfig } = require('cypress');
const happoTask = require('happo-cypress/task');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      happoTask.register(on);
      return config;
    },
    baseUrl: 'http://localhost:3000',
  },
});
