// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */


const testDir = defineBddConfig({
  // featuresRoot: './DemoQA/features', // convert files into playwright test case 
  outputDir: '.feature-gen/',
  features: ["**/features/*.feature"],  // feature file 
  steps: ["**/step_definitions/*.js", "**/fixtures/*.js"], // steps
});


export default defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html'],
    // cucumberReporter('html', { outputFile: 'cucumber-report/report.html' }),
    ["allure-playwright"],
    ['json', { outputFile: 'playwright-report/results.json' }],

  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    headless: true,
    screenshot: 'only-on-failure',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Demo QA Chrome',
      use: {
        channel: 'chrome',
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        video: {
          mode: "on",
          size: { width: 1920, height: 1080 }
        },
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     channel: 'firefox',
    //     ...devices['Desktop Firefox'],
    //     viewport: { width: 1920, height: 1080 },
    //     video: {
    //       mode: "on",
    //       size: { width: 1920, height: 1080 }
    //     },
    //   }
    //   ,
    // },

    // {
    //   name: "Microsoft Edge",
    //   use: {
    //     channel: "msedge",
    //     ...devices["Desktop Edge"],
    //     viewport: { width: 1920, height: 1080 },
    //     video: {
    //       mode: "on",
    //       size: { width: 1920, height: 1080 }
    //     },
    //   }
    // }

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

