import { defineConfig, devices } from '@playwright/test';

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:6006';

export default defineConfig({
  testDir: './test',
  fullyParallel: true,
  workers: process.env.CI ? 2 : 4,
  snapshotPathTemplate: './test/snapshots/{arg}-{projectName}.png',
  // ...
  // Using the `html` reporter for visual diffing.
  reporter: process.env.CI ? 'html' : 'dot',
  // ...
  use: {
    baseURL: BASE_URL,
  },
  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
