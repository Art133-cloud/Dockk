import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstPage from "./pages/FirstPage"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstPage />
  </React.StrictMode>
);

reportWebVitals();
