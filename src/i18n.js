import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

// `resources` is where we pass our translation keys for
// both languages.
const resources = {
  en: {
    translation: {
      plan_name: 'Startup',
      tag_title: 'Most popular',
      promo_percent: '{{percent}}% OFF!',
      plan_description:
        'A plan that scales with your rapidly growing business.',
      plan_currency: 'Price',
      plan_frequency: 'month',
      plan_cta: 'Start your free trial',
    },
  },
  es: {
    translation: {
      plan_name: 'Puesta en marcha',
      tag_title: 'Más popular',
      promo_percent: '¡{{percent}}% DE DESCUENTO!',
      plan_description:
        'Un plan que escala con su negocio en rápido crecimiento.',
      plan_currency: 'Precio',
      plan_frequency: 'mes',
      plan_cta: 'Comienza tu prueba gratuita',
    },
  },
};

i18n
  // We bind the `i18n` instance to an internal store
  .use(initReactI18next)
  // .use(HttpApi)
  .use(LanguageDetector)
  .init({
    resources,
    // Making `en` as our default language
    lng: 'en',
    // Disabling i18next's escaping of values injected into
    // translation messages at runtime, since React does this
    // for us
    interpolation: {
      escapeValue: false,
    },
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
