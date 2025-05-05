import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from './components/Page'

storyblokInit({
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
