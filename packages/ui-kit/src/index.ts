import { ElementType, BlockContext } from './blocks';

export { ElementType as ELEMENT_TYPES, BlockContext as BLOCK_CONTEXT };

export * from './blocks';
export * from './surfaces/text';
export * from './surfaces/message';
export * from './surfaces/modal';
export * from './surfaces/banner';

export const version = process.env.VERSION;

if (process.env.VERSION) {
  console.log(`ui-kit version: ${process.env.VERSION}`);
}
