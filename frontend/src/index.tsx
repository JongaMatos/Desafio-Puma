import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home } from './pages/home/home';

import { AppProvider } from './context';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <Home />
    </AppProvider>
  </React.StrictMode>
);


