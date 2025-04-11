const { defineConfig } = require("cypress");

const browserify = require("@cypress/browserify-preprocessor");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
//const fs = require('fs');

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

const neatCSV = require('neat-csv');
const fs = require('fs');

async function setupNodeEvents(on, config) {

  config.db = {
    userName: "dbadmin",
    password: "Kik-pro1362",
    server: "ebriceno.database.windows.net",
    options: {
      database: "ebricenodemo",
      encrypt: true,
      rowCollectionOnRequestCompletion: true
    }
  }

  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);

  // Initialize the Mochawesome reporter
  require('cypress-mochawesome-reporter/plugin')(on);

  // Initialize the Cucumber preprocessor plugin
  await addCucumberPreprocessorPlugin(on, config);

  // Set up the Webpack preprocessor for Cypress
  require('@cypress/webpack-preprocessor')(config);

  // Register the 'parseCSV' task
  on('task', {
    parseCSV(filePath) {
      return fs.promises.readFile(filePath, "utf8")
        .then((csvData) => neatCSV(csvData)) // Parse the CSV content
        .catch(err => {
          throw new Error(`Failed to read or parse CSV: ${err.message}`);
        });
    }
  });

  on('task', {

    excelToJsonConverter(filePath) {

      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
      return result;

    }

  })

  // Return the modified config object
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  env: {
    url: "https://rahulshettyacademy.com/",
  },
  retries: {
    runMode: 1,
  },
  projectId: "qhmtd5",
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*', // Adjust your spec pattern as needed
  },
});