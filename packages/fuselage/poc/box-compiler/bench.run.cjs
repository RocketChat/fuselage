/* Headless bench driver. Runs the Box Bench story in each styling mode and
   prints a table. Usage: node poc/box-compiler/bench.run.cjs */
const { chromium } = require('playwright');

const PATH = '/?path=/story/layout-box-bench--benchmark';

const MODES = [
  { name: 'merged', base: 'http://localhost:6006', atomic: false },
  { name: 'atomic-runtime', base: 'http://localhost:6006', atomic: true },
  { name: 'build-time', base: 'http://localhost:6007', atomic: false },
];

(async () => {
  const browser = await chromium.launch();
  const results = [];

  for (const mode of MODES) {
    const ctx = await browser.newContext();
    const page = await ctx.newPage();
    await page.addInitScript((atomic) => {
      if (atomic) localStorage.setItem('fuselage-styling', 'atomic');
      else localStorage.removeItem('fuselage-styling');
    }, mode.atomic);

    await page.goto(mode.base + PATH, { waitUntil: 'domcontentloaded' });

    const frame = page.frameLocator('#storybook-preview-iframe');
    const runBtn = frame.getByRole('button', { name: 'run' });
    await runBtn.waitFor({ state: 'visible', timeout: 60000 });
    await runBtn.click();

    const pre = frame.locator('pre');
    await pre.filter({ hasText: 'mountMs' }).first().waitFor({ timeout: 60000 });
    const json = JSON.parse(await pre.first().textContent());
    results.push({ mode: mode.name, ...json });
    await ctx.close();
  }

  await browser.close();
  console.table(results);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
