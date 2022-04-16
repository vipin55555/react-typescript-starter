import i18n from 'i18next'
import { Suspense } from 'react';

import { initReactI18next } from 'react-i18next';
import translationEng from './translations/en-US.json';
import translationHindi from './translations/hin-IN.json';

import { AppFrame } from './components';
import { ServiceContext } from './contexts';
import { ServiceInjector } from './services';

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

  return (
    <Suspense fallback='Loading ..'>
        <ServiceContext.Provider value={ServiceInjector}>
          <AppFrame>
          </AppFrame>
        </ServiceContext.Provider>
    </Suspense>
  );
}

export default App;
