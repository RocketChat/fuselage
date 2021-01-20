import { UiKitParserText, uiKitText } from '@rocket.chat/ui-kit';

import { mrkdwn, plainText } from '../renderers';

class TextParser extends UiKitParserText {}

TextParser.prototype.plainText = plainText;
TextParser.prototype.mrkdwn = mrkdwn;

export const textParser = new TextParser();

export const UiKitText = (blocks, conditions = {}) =>
  uiKitText(textParser, { engine: 'rocket.chat', ...conditions })(blocks);
