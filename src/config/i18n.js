import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: { translation: { title: 'Tournament Management Platform', register: 'Register Team' } },
  ml: { translation: { title: 'ടൂർണമെന്റ് മാനേജ്മെന്റ് പ്ലാറ്റ്ഫോം', register: 'ടീം രജിസ്റ്റർ ചെയ്യുക' } }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
