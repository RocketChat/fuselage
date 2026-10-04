import fs from 'fs';
import path from 'path';

import { expect, test } from '@playwright/test';

const packageDir = process.env.PACKAGE_DIR ?? process.cwd();
const { name } = JSON.parse(
  fs.readFileSync(path.join(packageDir, 'package.json'), 'utf-8'),
);

for (const width of [320, 375, 600]) {
  test(`Pagination has usable controls without overflow at ${width}px`, async ({
    page,
  }) => {
    test.skip(
      name !== '@rocket.chat/fuselage',
      'Pagination belongs to Fuselage',
    );
    await page.setViewportSize({ width, height: 600 });
    await page.goto(
      '/iframe.html?id=navigation-pagination--default&viewMode=story',
    );

    const pagination = page.getByRole('navigation', {
      name: 'Pagination Navigation',
    });
    await expect(pagination).toBeVisible();
    await page.evaluate(() => document.fonts.ready);

    const sizes = await pagination.getByRole('button').evaluateAll((buttons) =>
      buttons.map((button) => {
        const { width, height } = button.getBoundingClientRect();
        return { width, height };
      }),
    );
    for (const size of sizes) {
      expect(size.width).toBeGreaterThanOrEqual(40);
      expect(size.height).toBeGreaterThanOrEqual(40);
    }

    const optionRows = await pagination
      .getByRole('button', { name: /^Show \d+ items per page$/ })
      .evaluateAll((buttons) =>
        buttons.map((button) => button.getBoundingClientRect().top),
      );
    expect(new Set(optionRows).size).toBe(1);

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  });
}
