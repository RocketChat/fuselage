type Code = {
	type: 'CODE';
	value: string;
};

type InlineCode = {
	type: 'INLINE_CODE';
	value: string;
};

type Heading = {
	type: 'HEADING';
	value: string;
};

type Quote = {
	type: 'QUOTE';
	value: Array<Inlines>;
};

type Blocks = Code | Heading | Quote  | Paragraph;

type Bold = {
	type: 'BOLD';
	value: string;
};

type Italic = {
	type: 'ITALIC';
	value: string;
};

type Strike = {
	type: 'STRIKE';
	value: string;
};

type PlainText = {
	type: 'PLAIN_TEXT';
	value: string;
};

type Paragraph = {
    type: 'PARAGRAPH';
    value: Inlines[];
}

type Link = {
	type: 'LINK';
	value: string;
};


type Inlines = Bold | Italic | Strike | Link | PlainText | InlineCode | Paragraph;

export type Markdown = Array<Inlines | Blocks>;

type Types = Inlines | Blocks;

const generate = (type: Types['type']) => (value: Types['value'] ) =>({ type, value });
export const bold = generate('BOLD');
export const italic = generate('ITALIC');
export const plain = generate('PLAIN_TEXT');
export const link = generate('LINK');
export const paragraph = generate('PARAGRAPH');
export const code = generate('CODE');
export const heading = generate('HEADING');
export const strike = generate('STRIKE');
export const inlineCode = generate('INLINE_CODE');