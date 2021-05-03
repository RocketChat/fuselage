export type Code = {
  type: 'CODE';
  value: Plain[];
};

export type InlineCode = {
  type: 'INLINE_CODE';
  value: Plain;
};

export type Heading = {
  type: 'HEADING';
  value: Plain[];
};

export type Quote = {
  type: 'QUOTE';
  value: Inlines;
};

export type Blocks = Code | Heading | Quote | Paragraph;

export type Markup = Italic | Strike | Bold | Plain;
export type MarkupExcluding<T extends Markup> = Exclude<Markup, T>;

export type Bold = {
  type: 'BOLD';
  value: Array<MarkupExcluding<Bold>>;
};

export type Italic = {
  type: 'ITALIC';
  value: Array<MarkupExcluding<Italic>>;
};

export type Strike = {
  type: 'STRIKE';
  value: Array<MarkupExcluding<Strike>>;
};

export type Plain = {
  type: 'PLAIN_TEXT';
  value: string;
};

export type Paragraph = {
  type: 'PARAGRAPH';
  value: Array<Bold | Plain | Italic | Strike | InlineCode | Link>;
};

export type Link = {
  type: 'LINK';
  value: [Markup, Plain];
};

export type Types = {
  BOLD: Bold;
  PARAGRAPH: Paragraph;
  PLAIN_TEXT: Plain;
  ITALIC: Italic;
  STRIKE: Strike;
  CODE: Code;
  INLINE_CODE: InlineCode;
  HEADING: Heading;
  QUOTE: Quote;
  LINK: Link;
};

export type TypesKeys = keyof Types;

export type Inlines = Paragraph | Bold | Plain | Italic | Strike | Link;

export type Markdown = Array<Inlines | Blocks>;

export type ASTMessage = Blocks[];
