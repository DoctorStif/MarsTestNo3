import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { marsResources } from './mars/i18n/resources';

export const supportedLanguages = ['tr', 'en', 'de'] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

void i18n.use(initReactI18next).init({
  fallbackLng: 'tr',
  lng: 'tr',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    tr: {
      translation: marsResources.tr,
    },
    en: {
      translation: marsResources.en,
    },
    de: {
      translation: marsResources.de,
    },
  },
});

export default i18n;
