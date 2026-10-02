import { extractAtomicStylingProps, extractStylingProps } from './stylingProps';

const contentsFor = (props: Record<string, unknown>) => {
  const [, styles] = extractAtomicStylingProps(props);
  return styles.map((cssFn) => cssFn());
};

describe('extractAtomicStylingProps', () => {
  it('emits one cssFn per styling prop and keeps non-styling props', () => {
    const [rest, styles] = extractAtomicStylingProps({
      padding: 'x8',
      display: 'flex',
      id: 'keep-me',
    });

    expect(styles).toHaveLength(2);
    expect(rest).toEqual({ id: 'keep-me' });
  });

  it('yields identical content for a declaration common to two Boxes (dedup)', () => {
    const a = contentsFor({ display: 'flex', padding: 'x8' });
    const b = contentsFor({ display: 'flex', padding: 'x16' });

    // display:flex → same content on both (one shared class); padding differs
    const shared = a.filter((content) => b.includes(content));
    expect(shared).toHaveLength(1);
    expect(a).not.toEqual(b);
  });

  it('produces the same declarations as the merged path', () => {
    const props = { display: 'flex', padding: 'x8', color: 'default' };
    const [, merged] = extractStylingProps(props);
    const [, atomic] = extractAtomicStylingProps(props);

    expect(atomic.map((cssFn) => cssFn()).join('')).toBe(merged?.());
  });
});
