import type { TextObject } from './TextObject';

export enum TextObjectType {
  /** @deprecated */
  PLAINTEXT = 'plain_text',
  PLAIN_TEXT = 'plain_text', // eslint-disable-line @typescript-eslint/no-duplicate-enum-values
  /** @deprecated */
  MARKDOWN = 'mrkdwn',
  MRKDWN = 'mrkdwn', // eslint-disable-line @typescript-eslint/no-duplicate-enum-values
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AssertEnumKeysFromBlockUnionTypes = {
  [B in TextObject as Uppercase<B['type']>]: (typeof TextObjectType)[Uppercase<
    B['type']
  >];
};
