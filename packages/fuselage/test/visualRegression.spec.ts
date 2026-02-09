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

    await page.evaluate(() => document.fonts.ready);

    const selector = '#storybook-root'; // Replace with your target selector

    const renderedFont = await page.evaluate((sel) => {
      const element = document.querySelector(sel);
      if (!element) return null;

      // Get the computed font-family value (e.g., "Montserrat, Helvetica, sans-serif")
      const computedFontFamily = window.getComputedStyle(element).fontFamily;

      // Split the list of fonts and check which one is actually used by the browser
      const fonts = computedFontFamily
        .split(',')
        .map((font) => font.trim().replace(/['"]/g, ''));

      // Use document.fonts.check to find the first working font
      for (const font of fonts) {
        // Check if a 10px tall text can be rendered with this specific font
        if (document.fonts.check(`10px ${font}`)) {
          return font;
        }
      }

      // Fallback or if no specific font is matched
      return 'System/Fallback Font';
    }, selector);

    console.log(`The actual rendered font is: ${renderedFont}`);

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
