import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'normalize.css';

import './styles.css';
import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <HeroesApp></HeroesApp>
    </HashRouter>
  </React.StrictMode>
);
