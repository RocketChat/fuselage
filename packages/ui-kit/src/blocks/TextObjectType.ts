import type { TextObject } from './TextObject';

export enum TextObjectType {
  /** @deprecated */
  PLAINTEXT = 'plain_text',
  PLAIN_TEXT = 'plain_text',
  /** @deprecated */
  MARKDOWN = 'mrkdwn',
  MRKDWN = 'mrkdwn',
  I18N = 'i18n',
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type AssertEnumKeysFromBlockUnionTypes = {
  [B in TextObject as Uppercase<B['type']>]: (typeof TextObjectType)[Uppercase<
    B['type']
  >];
};
