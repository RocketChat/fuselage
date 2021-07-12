import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import ResizeObserverMock from './ResizeObserverMock';

beforeAll(async () => {
  return i18next.use(initReactI18next).init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: await import('../.i18n/en.i18n.json'),
      },
    },
  });
});

beforeAll(() => {
  window.ResizeObserver = ResizeObserverMock;
});
