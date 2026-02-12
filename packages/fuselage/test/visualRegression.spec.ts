import { expect, test } from '@playwright/test';

// This file is created by Storybook
// when we run `yarn workspace @rocket.chat/fuselage build-storybook`
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

    await page.evaluate(() => document.fonts.ready);

    const storybookRoot = page.locator('#storybook-root');
    await storybookRoot.waitFor({ state: 'visible' });

    await expect(page).toHaveScreenshot(`${story.id}.png`, {
      fullPage: true,
      animations: 'disabled',
    });
  });
}
