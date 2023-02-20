import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Carte from './pages/Carte';
import Home from 'pages/Home';
import Router from './routes.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const componenteAtual = window.location.pathname === '/' ? <Home /> : <Carte />;

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);