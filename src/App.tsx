import { Suspense } from 'react';

import './translations/config'; // Internationalization config

import { AppFrame } from './components';
import { ServiceContext } from './contexts'; // 
import { ServiceInjector } from './services'; // 

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
