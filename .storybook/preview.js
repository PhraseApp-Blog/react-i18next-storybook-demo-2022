import i18n from '../src/i18n';
import './../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  i18n,
  locale: 'en',
  locales: {
    en: { title: 'English', left: '🇺🇸' },
    es: { title: 'Espanyol', left: '🇪🇸' },
  },
};
