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

// const PATH_USED_FONTS = path.join(process.cwd(), 'usedFonts');
// await fs.promises.mkdir(PATH_USED_FONTS, { recursive: true });

const loaded_fonts_all: unknown[][] = [];

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

    await page.locator('#storybook-root').waitFor({ state: 'visible' });

    const loaded_fonts = await page.evaluate(async () => {
      await document.fonts.ready; // Ensure all fonts are loaded
      const fontFamilies = new Set();
      for (const fontFace of document.fonts.values()) {
        fontFamilies.add(fontFace.family);
      }
      return Array.from(fontFamilies);
    });
    loaded_fonts_all.push([story.name, loaded_fonts]);
    console.log('loaded_fonts', loaded_fonts);

    const box = await page.locator('#storybook-root').boundingBox();

    await expect(page).toHaveScreenshot(`${story.id}.png`, {
      clip: box || undefined,
      fullPage: true,
      animations: 'disabled',
    });
  });
}

// test.afterAll(async () => {
//   await fs.promises.writeFile(
//     path.join(PATH_USED_FONTS, 'loaded_fonts_all.json'),
//     JSON.stringify(loaded_fonts_all, null, 2),
//   );
// });
