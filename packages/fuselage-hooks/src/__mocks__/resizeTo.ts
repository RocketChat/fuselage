import { mediaQueryLists } from './matchMedia';

const resizeToMock = (x: number, y: number): void => {
  Object.assign(window, { innerWidth: x, innerHeight: y });

  mediaQueryLists.forEach((mediaQueryList) => {
    const event = Object.assign(new Event('change'), {
      matches: window.innerWidth <= 968,
      media: mediaQueryList.media,
    }) as MediaQueryListEvent;
    mediaQueryList.dispatchEvent(event);
  });
};

export default resizeToMock;
