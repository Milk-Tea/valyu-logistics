import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './App.css';

import { storyblokInit, apiPlugin } from '@storyblok/react';

import Page from './components/Page';
import Teaser from './components/Teaser';

storyblokInit({
  accessToken: 'QPWtJhVx2TMZ4d4tLHGlLwtt',
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
