import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the code */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['json', { outputFile: 'test-results/results.json' }],
    ['html'],
    ['allure-playwright']  // This generates allure-results folder
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    //baseURL: 'https://login.salesforce.com',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    headless: !!process.env.CI,
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
    /* Video on failure */
    video: 'on',
    /* Viewport settings */
    //viewport: { width: 1920, height: 1080 },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        browserName:"chromium",
        viewport:null,
        launchOptions:{
            args:["--start-maximized"]
        },
        // Load storage state (cookies, localStorage, sessionStorage) from file
        //storageState: path.join(__dirname, './logins/salesforceLogin.json'),
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     //storageState: path.join(__dirname, './logins/salesforceLogin.json'),
    //   },
    // },

    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     storageState: path.join(__dirname, './logins/salesforceLogin.json'),
    //   },
    // },

    // /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //     storageState: path.join(__dirname, './logins/salesforceLogin.json'),
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //     storageState: path.join(__dirname, './logins/salesforceLogin.json'),
    //   },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
