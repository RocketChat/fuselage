import * as UiKit from '@rocket.chat/ui-kit';

export const imageWithTitle: readonly UiKit.LayoutBlock[] = [
  {
    type: 'image',
    title: {
      type: 'plain_text',
      text: 'I Need a Marg',
      emoji: true,
    },
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnElEQVR42u3RAQ0AAAgDoJvc6FrDOahATdLhjBIiBCFCECIEIUIQIkSIEIQIQYgQhAhBiBCEIEQIQoQgRAhChCAEIUIQIgQhQhAiBCEIEYIQIQgRghAhCEGIEIQIQYgQhAhBCEKEIEQIQoQgRAhCECIEIUIQIgQhQhCCECEIEYIQIQgRghCECEGIEIQIQYgQhAgRIgQhQhAiBCHfLcjClZ2EzWBMAAAAAElFTkSuQmCC',
    altText: 'marg',
  },
];

export const imageWithoutTitle: readonly UiKit.LayoutBlock[] = [
  {
    type: 'image',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnElEQVR42u3RAQ0AAAgDoJvc6FrDOahATdLhjBIiBCFCECIEIUIQIkSIEIQIQYgQhAhBiBCEIEQIQoQgRAhChCAEIUIQIgQhQhAiBCEIEYIQIQgRghAhCEGIEIQIQYgQhAhBCEKEIEQIQoQgRAhCECIEIUIQIgQhQhCCECEIEYIQIQgRghCECEGIEIQIQYgQhAgRIgQhQhAiBCHfLcjClZ2EzWBMAAAAAElFTkSuQmCC',
    altText: 'inspiration',
  },
];
