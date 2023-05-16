import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RoutesComponent } from './navigation';
import store, { persistor } from './init/store';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <RoutesComponent/>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

export default App;
