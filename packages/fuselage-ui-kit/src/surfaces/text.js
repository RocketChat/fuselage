import { UiKitParserText, uiKitText } from '@rocket.chat/ui-kit';

import { mrkdwn, plainText, text } from '../text';

class TextParser extends UiKitParserText {
  mrkdwn(...args) {
    return mrkdwn(...args);
  }

  plainText(...args) {
    return plainText(...args);
  }

  text(...args) {
    return text(...args);
  }
}

export const textParser = new TextParser();
export const UiKitText = (blocks, conditions = {}) =>
  uiKitText(textParser, { engine: 'rocket.chat', ...conditions })(blocks);
