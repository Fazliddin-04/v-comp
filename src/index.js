import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';

import App from './App';
import './index.scss';

// Til o'zgartirish uchun - i18n
i18n
  .use(initReactI18next) // i18n react-i18next ga o'tadi
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['tg', 'uz', 'ru'],
    fallbackLng: "uz",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    }
  });

const loadingMarkup = (
  <div className='center'>Loading...</div>
)

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Suspense fallback={loadingMarkup}> 
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Suspense>
);