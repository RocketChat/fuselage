import { BlockContext } from '@rocket.chat/ui-kit';

const Accessory = ({ blockId, appId, element, parser }) =>
  parser.renderAccessories(
    { blockId, appId, ...element },
    BlockContext.SECTION,
    parser
  );

export default Accessory;
