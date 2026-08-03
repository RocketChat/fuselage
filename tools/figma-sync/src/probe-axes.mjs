#!/usr/bin/env node
// Reports the select/boolean argTypes of a list of stories, so you know which
// args are candidate variant axes before adding a component to components.json.
//
//   node src/probe-axes.mjs '["inputs-button--default"]' http://localhost:6006
import { chromium } from 'playwright';
const ids = JSON.parse(process.argv[2]);
const base = process.argv[3];
const b = await chromium.launch();
const p = await b.newPage();
await p.goto(`${base}/iframe.html?id=${ids[0]}&viewMode=story`, {
  waitUntil: 'domcontentloaded',
});
await p.waitForFunction(() => !!window.__STORYBOOK_STORY_STORE__, {
  timeout: 60000,
});
// The store throws 'index is not ready' until a story has actually rendered.
await p.waitForSelector('#storybook-root > *', { timeout: 60000 });
for (const id of ids) {
  const r = await p.evaluate(async (storyId) => {
    try {
      const st = await window.__STORYBOOK_STORY_STORE__.loadStory({ storyId });
      const sel = [],
        bool = [];
      for (const [k, v] of Object.entries(st.argTypes || {})) {
        const t = v?.control?.type ?? v?.control;
        if (t === 'select' || t === 'radio' || t === 'inline-radio')
          sel.push(`${k}[${(v.options || []).length}]`);
        if (t === 'boolean') bool.push(k);
      }
      return { sel, bool, args: Object.keys(st.initialArgs || {}) };
    } catch (e) {
      return { err: e.message };
    }
  }, id);
  const name = id.split('--')[0];
  if (r.err) {
    console.log(`${name.padEnd(30)} ERR ${r.err}`);
    continue;
  }
  console.log(
    `${name.padEnd(30)} select: ${(r.sel.join(' ') || '-').padEnd(34)} bool: ${r.bool.join(' ') || '-'}`,
  );
}
await b.close();
