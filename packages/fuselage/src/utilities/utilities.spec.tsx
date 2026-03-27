import { render } from '@testing-library/react';
import type { ReactElement } from 'react';

import { Box } from '../components/Box';
import { resolveUtilityClass } from './classNameMap';
import { rcx } from './rcx';
import { useFastStylingProps } from './useFastStylingProps';

// ─── classNameMap unit tests ─────────────────────────────────

describe('resolveUtilityClass', () => {
  it('resolves spacing props', () => {
    expect(resolveUtilityClass('p', 'x16')).toBe('rcx-p-16');
    expect(resolveUtilityClass('m', 'x4')).toBe('rcx-m-4');
    expect(resolveUtilityClass('mbs', 'x8')).toBe('rcx-mbs-8');
    expect(resolveUtilityClass('pie', 'none')).toBe('rcx-pie-0');
    expect(resolveUtilityClass('margin', 'x24')).toBe('rcx-m-24');
  });

  it('resolves negative margins', () => {
    expect(resolveUtilityClass('m', 'neg-x4')).toBe('rcx-m-neg-4');
    expect(resolveUtilityClass('m', '-x8')).toBe('rcx-m-neg-8');
  });

  it('resolves size props', () => {
    expect(resolveUtilityClass('w', 'x32')).toBe('rcx-w-32');
    expect(resolveUtilityClass('h', 'full')).toBe('rcx-h-full');
    expect(resolveUtilityClass('width', 'sw')).toBe('rcx-w-sw');
    expect(resolveUtilityClass('maxWidth', 'x128')).toBe('rcx-max-w-128');
  });

  it('resolves background color tokens', () => {
    expect(resolveUtilityClass('bg', 'surface-light')).toBe('rcx-bg-surface-light');
    expect(resolveUtilityClass('bg', 'tint')).toBe('rcx-bg-surface-tint');
    expect(resolveUtilityClass('backgroundColor', 'surface-hover')).toBe('rcx-bg-surface-hover');
    expect(resolveUtilityClass('bg', 'status-background-info')).toBe('rcx-bg-status-info');
  });

  it('resolves font color tokens', () => {
    expect(resolveUtilityClass('color', 'font-default')).toBe('rcx-color-font-default');
    expect(resolveUtilityClass('color', 'default')).toBe('rcx-color-font-default');
    expect(resolveUtilityClass('color', 'font-danger')).toBe('rcx-color-font-danger');
  });

  it('resolves stroke color tokens', () => {
    expect(resolveUtilityClass('borderColor', 'stroke-light')).toBe('rcx-border-light');
    expect(resolveUtilityClass('borderColor', 'light')).toBe('rcx-border-light');
  });

  it('resolves font scale tokens', () => {
    expect(resolveUtilityClass('fontScale', 'h1')).toBe('rcx-font-h1');
    expect(resolveUtilityClass('fontScale', 'p2m')).toBe('rcx-font-p2m');
    expect(resolveUtilityClass('fontScale', 'micro')).toBe('rcx-font-micro');
  });

  it('resolves elevation tokens', () => {
    expect(resolveUtilityClass('elevation', '0')).toBe('rcx-elevation-0');
    expect(resolveUtilityClass('elevation', '1')).toBe('rcx-elevation-1');
    expect(resolveUtilityClass('elevation', '2nb')).toBe('rcx-elevation-2nb');
  });

  it('resolves display tokens', () => {
    expect(resolveUtilityClass('display', 'flex')).toBe('rcx-d-flex');
    expect(resolveUtilityClass('display', 'none')).toBe('rcx-d-none');
  });

  it('resolves flex tokens', () => {
    expect(resolveUtilityClass('flexDirection', 'column')).toBe('rcx-flex-column');
    expect(resolveUtilityClass('alignItems', 'center')).toBe('rcx-items-center');
    expect(resolveUtilityClass('justifyContent', 'space-between')).toBe('rcx-justify-space-between');
  });

  it('resolves border radius tokens', () => {
    expect(resolveUtilityClass('borderRadius', 'x4')).toBe('rcx-rounded-4');
    expect(resolveUtilityClass('borderRadius', 'full')).toBe('rcx-rounded-full');
    expect(resolveUtilityClass('borderRadius', 'none')).toBe('rcx-rounded-none');
  });

  it('resolves boolean props', () => {
    expect(resolveUtilityClass('withTruncatedText', true)).toBe('rcx-truncate');
    expect(resolveUtilityClass('invisible', true)).toBe('rcx-invisible');
    expect(resolveUtilityClass('invisible', false)).toBeUndefined();
  });

  it('returns undefined for unknown values', () => {
    expect(resolveUtilityClass('p', '13px')).toBeUndefined();
    expect(resolveUtilityClass('bg', '#ff00ff')).toBeUndefined();
    expect(resolveUtilityClass('color', 'magenta')).toBeUndefined();
    expect(resolveUtilityClass('unknownProp', 'x4')).toBeUndefined();
  });
});

// ─── rcx() component tests ──────────────────────────────────

describe('rcx()', () => {
  it('creates a component with default utility classes', () => {
    const Card = rcx('div', { p: 'x16', bg: 'surface-tint' });
    const { container } = render(<Card data-testid="card" />);
    const el = container.firstChild as HTMLElement;

    expect(el.tagName).toBe('DIV');
    expect(el.classList.contains('rcx-p-16')).toBe(true);
    expect(el.classList.contains('rcx-bg-surface-tint')).toBe(true);
  });

  it('allows overriding defaults via props', () => {
    const Card = rcx('div', { p: 'x16', bg: 'surface-tint' });
    const { container } = render(<Card p="x24" bg="surface-hover" />);
    const el = container.firstChild as HTMLElement;

    expect(el.classList.contains('rcx-p-24')).toBe(true);
    expect(el.classList.contains('rcx-bg-surface-hover')).toBe(true);
    // defaults should be overridden, not added
    expect(el.classList.contains('rcx-p-16')).toBe(false);
    expect(el.classList.contains('rcx-bg-surface-tint')).toBe(false);
  });

  it('merges custom className', () => {
    const Card = rcx('div', { p: 'x8' });
    const { container } = render(<Card className="my-custom" />);
    const el = container.firstChild as HTMLElement;

    expect(el.classList.contains('my-custom')).toBe(true);
    expect(el.classList.contains('rcx-p-8')).toBe(true);
  });

  it('passes HTML attributes through', () => {
    const Card = rcx('div', { p: 'x8' });
    const { container } = render(<Card id="test" role="article" />);
    const el = container.firstChild as HTMLElement;

    expect(el.id).toBe('test');
    expect(el.getAttribute('role')).toBe('article');
  });

  it('renders the correct element type', () => {
    const Section = rcx('section', { p: 'x16' });
    const { container } = render(<Section />);
    expect((container.firstChild as HTMLElement).tagName).toBe('SECTION');
  });

  it('handles boolean props', () => {
    const Truncated = rcx('span', { withTruncatedText: true });
    const { container } = render(<Truncated />);
    const el = container.firstChild as HTMLElement;
    expect(el.classList.contains('rcx-truncate')).toBe(true);
  });

  it('warns on invalid token values in dev mode', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const Card = rcx('div', { p: 'x16' });
    render(<Card p={'13px' as any} />);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('[rcx] Unknown token value'));
    spy.mockRestore();
  });
});

// ─── Performance benchmark ───────────────────────────────────

describe('performance: fast-path vs runtime CSS-in-JS', () => {
  // We measure wall-clock time for rendering N items in a list.
  // This is a synthetic benchmark; real gains depend on the app.

  const ITEMS = 200;

  it('benchmarks Box runtime CSS-in-JS path', () => {
    const items = Array.from({ length: ITEMS }, (_, i) => i);

    const start = performance.now();
    const { unmount } = render(
      <div>
        {items.map((i) => (
          <Box
            key={i}
            p='x16'
            m='x8'
            bg='surface-tint'
            color='font-default'
            display='flex'
            alignItems='center'
            elevation='1'
          >
            Item {i}
          </Box>
        ))}
      </div>,
    );
    const elapsed = performance.now() - start;
    unmount();

    console.log(`[BENCHMARK] Box runtime CSS-in-JS: ${ITEMS} items in ${elapsed.toFixed(2)}ms`);
  });

  it('benchmarks rcx() utility class path', () => {
    const Card = rcx('div', {
      p: 'x16',
      m: 'x8',
      bg: 'surface-tint',
      color: 'default',
      display: 'flex',
      alignItems: 'center',
      elevation: '1',
    });

    const items = Array.from({ length: ITEMS }, (_, i) => i);

    const start = performance.now();
    const { unmount } = render(
      <div>
        {items.map((i) => (
          <Card key={i}>Item {i}</Card>
        ))}
      </div>,
    );
    const elapsed = performance.now() - start;
    unmount();

    console.log(`[BENCHMARK] rcx() utility classes: ${ITEMS} items in ${elapsed.toFixed(2)}ms`);
  });

  it('benchmarks rcx() with per-item overrides', () => {
    const Card = rcx('div', {
      p: 'x16',
      bg: 'surface-tint',
    });

    const paddings: Array<'x4' | 'x8' | 'x16' | 'x24' | 'x32'> = ['x4', 'x8', 'x16', 'x24', 'x32'];
    const items = Array.from({ length: ITEMS }, (_, i) => i);

    const start = performance.now();
    const { unmount } = render(
      <div>
        {items.map((i) => (
          <Card key={i} p={paddings[i % paddings.length]}>
            Item {i}
          </Card>
        ))}
      </div>,
    );
    const elapsed = performance.now() - start;
    unmount();

    console.log(`[BENCHMARK] rcx() with overrides: ${ITEMS} items in ${elapsed.toFixed(2)}ms`);
  });
});
