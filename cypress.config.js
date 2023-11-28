const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://tredgate.com/pmtool',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
