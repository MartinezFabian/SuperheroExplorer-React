import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './styles.css';
import { HeroesApp } from './HeroesApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesApp></HeroesApp>
  </React.StrictMode>
);
