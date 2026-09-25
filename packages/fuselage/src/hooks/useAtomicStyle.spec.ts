import { buildAtomicClassName } from './useAtomicStyle';

describe('buildAtomicClassName', () => {
  it('embeds property and tokenish value with a short hash suffix', () => {
    expect(buildAtomicClassName('display: flex !important;')).toMatch(
      /^rcx-display-flex-[0-9a-z]{5}$/,
    );
    expect(
      buildAtomicClassName('justify-content: space-between !important;'),
    ).toMatch(/^rcx-justify-content-space-between-[0-9a-z]{5}$/);
  });

  it('keeps the property but full hash when the value is not tokenish', () => {
    const cls = buildAtomicClassName(
      'color: var(--rcx-color-font-default) !important;',
    );
    expect(cls).toMatch(/^rcx-color-[0-9a-z]+$/);
    expect(cls).not.toContain('var-');
  });

  it('falls back to the plain hash for multi-declaration content', () => {
    const cls = buildAtomicClassName(
      'box-shadow: none;\n      border: 1px solid red;',
    );
    expect(cls).toMatch(/^rcx-css-[0-9a-z]+$/);
  });

  it('is deterministic and distinguishes different values', () => {
    const a = buildAtomicClassName('padding: 0.5rem !important;');
    const b = buildAtomicClassName('padding: 1rem !important;');
    expect(a).toBe(buildAtomicClassName('padding: 0.5rem !important;'));
    expect(a).not.toBe(b);
  });
});
