import json5 from 'json5';

export const decodeJson5 = (source) => json5.parse(source);

export const encodeJson5 = (data) =>
  json5
    .stringify(data, null, 2)
    .replace(
      /[\u007f-\uffff]/g,
      (c) => `\\u${`0000${c.charCodeAt(0).toString(16)}`.slice(-4)}`
    );
