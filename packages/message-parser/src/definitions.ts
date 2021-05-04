export type CodeLine = {
  type: 'CODE_LINE';
  value: Plain;
};

export type Emoji = {
  type: 'EMOJI';
  value: Plain;
};

export type Code = {
  type: 'CODE';
  value: CodeLine[];
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
  value: Array<
    | Bold
    | Plain
    | Italic
    | Strike
    | InlineCode
    | Link
    | UserMention
    | ChannelMention
    | Emoji
  >;
};

export type Link = {
  type: 'LINK';
  value: [Plain, Markup];
};

export type UserMention = {
  type: 'MENTION_USER';
  value: Plain;
};

export type ChannelMention = {
  type: 'MENTION_CHANNEL';
  value: Plain;
};

export type Types = {
  BOLD: Bold;
  PARAGRAPH: Paragraph;
  PLAIN_TEXT: Plain;
  ITALIC: Italic;
  STRIKE: Strike;
  CODE: Code;
  CODE_LINE: CodeLine;
  INLINE_CODE: InlineCode;
  HEADING: Heading;
  QUOTE: Quote;
  LINK: Link;
  MENTION_USER: UserMention;
  MENTION_CHANNEL: ChannelMention;
  EMOJI: Emoji;
};

export type TypesKeys = keyof Types;

export type Inlines =
  | Paragraph
  | Bold
  | Plain
  | Italic
  | Strike
  | Link
  | UserMention
  | ChannelMention;

export type Markdown = Array<Inlines | Blocks>;

export type ASTMessage = Blocks[];
