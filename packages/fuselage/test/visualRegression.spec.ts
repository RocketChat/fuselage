// import * as fs from 'fs';
// import * as path from 'path';

import { expect, test } from '@playwright/test';

// This file is created by Storybook
// when we run `npm run build`
import storybook from '../storybook-static/index.json' with { type: 'json' };

// Only run tests on stories, not other documentation pages.
const stories = Object.values(storybook.entries).filter(
  (e) => e.type === 'story' && !e.tags.includes('no-visual'),
);

for (const story of stories) {
  test(`${story.title} ${story.name} should not have visual regressions`, async ({
    page,
  }) => {
    const params = new URLSearchParams({
      id: story.id,
      viewMode: 'story',
    });

    await page.goto(`/iframe.html?${params.toString()}`, {
      waitUntil: 'domcontentloaded',
    });

    const storybookRoot = page.locator('#storybook-root');
    await storybookRoot.waitFor({ state: 'visible' });

    const box = await storybookRoot.boundingBox();

    await expect(page).toHaveScreenshot(`${story.id}.png`, {
      clip: box || undefined,
      fullPage: true,
      animations: 'disabled',
      // @ts-expect-error - comparator is not a valid option
      _comparator: 'ssim-cie94',
    });
  });
}
