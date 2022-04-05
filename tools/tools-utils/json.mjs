export const decodeJson = (source) => JSON.parse(source);

export const encodeJson = (data) =>
  JSON.stringify(data, null, 2).replace(
    /[\u007f-\uffff]/g,
    (c) => `\\u${`0000${c.charCodeAt(0).toString(16)}`.slice(-4)}`
  );
