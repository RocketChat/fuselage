import { Code, Color, Heading, Markup, Paragraph, Types } from './definitions';

const generate = <Type extends keyof Types>(type: Type) => (
  value: Types[Type]['value']
): Types[Type] => ({ type, value } as any);

export const paragraph = generate('PARAGRAPH');

export const bold = generate('BOLD');

export const color = (r: number, g: number, b: number, a = 255): Color => ({
  type: 'COLOR',
  value: { r, g, b, a },
});

export const emoji = (() => {
  const fn = generate('EMOJI');
  return (value: string) => fn(plain(value));
})();

export const heading = (
  value: Heading['value'],
  level: Heading['level'] = 1
): Heading => ({
  type: 'HEADING',
  level,
  value,
});

export const code = (
  value: Code['value'],
  language?: Code['language']
): Code => ({
  type: 'CODE',
  language: language || 'none',
  value,
});

export const inlineCode = generate('INLINE_CODE');
export const italic = generate('ITALIC');

export const plain = generate('PLAIN_TEXT');
export const strike = generate('STRIKE');
export const codeLine = generate('CODE_LINE');
export const link = (() => {
  const fn = generate('LINK');
  return (src: string, label?: Markup) =>
    fn({ src: plain(src), label: label || plain(src) });
})();
export const quote = generate('QUOTE');

export const mentionChannel = (() => {
  const fn = generate('MENTION_CHANNEL');
  return (value: string) => fn(plain(value));
})();
export const mentionUser = (() => {
  const fn = generate('MENTION_USER');
  return (value: string) => fn(plain(value));
})();

export const reducePlainTexts = (
  values: Paragraph['value']
): Paragraph['value'] =>
  values.reduce((result, item, index) => {
    if (index > 0) {
      const previous = result[result.length - 1];
      if (item.type === 'PLAIN_TEXT' && item.type === previous.type) {
        previous.value += item.value;
        return result;
      }
    }

    return [...result, item];
  }, [] as Paragraph['value']);
