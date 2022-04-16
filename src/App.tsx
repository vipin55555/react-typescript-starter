import i18n from 'i18next'
import { Suspense } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import { ServiceContext } from './contexts';
import { ServiceInjector } from './services';
import translationEng from './translations/en-US.json';
import translationHindi from './translations/hin-IN.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEng },
      hin: { translation: translationHindi }
    },
    lng: 'en',
    fallbackLng: 'en',
  });

const App = () => {
  const { t } = useTranslation();
  // i18n.changeLanguage('hin');

  return (
    <Suspense fallback='Loading ..'>
      <ServiceContext.Provider value={ServiceInjector}>
        <h1>{t("label-hello")}</h1>
      </ServiceContext.Provider>
    </Suspense>
  );
}

export default App;
