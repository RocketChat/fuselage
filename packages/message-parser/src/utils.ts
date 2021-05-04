import { Markup, Paragraph, Types, TypesKeys } from './definitions';

const generate = <Type extends TypesKeys>(type: Type) => (
  value: Types[Type]['value']
): Types[Type] => ({ type, value } as any);

export const paragraph = generate('PARAGRAPH');
export const bold = generate('BOLD');
export const plain = generate('PLAIN_TEXT');
export const italic = generate('ITALIC');
export const strike = generate('STRIKE');
export const code = generate('CODE');
export const codeLine = generate('CODE_LINE');
export const link = (() => {
  const fn = generate('LINK');
  return (src: string, label?: Markup) => fn([plain(src), label || plain(src)]);
})();
export const heading = generate('HEADING');
export const inlineCode = generate('INLINE_CODE');
export const quote = generate('QUOTE');
export const emoji = (() => {
  const fn = generate('EMOJI');
  return (value: string) => fn(plain(value));
})();

export const mentionUser = (() => {
  const fn = generate('MENTION_USER');
  return (value: string) => fn(plain(value));
})();

export const mentionChannel = (() => {
  const fn = generate('MENTION_CHANNEL');
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
