import React from 'react';
import ReactDOM from 'react-dom/client';
import 'ui-kit/theme/index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
