import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Airbnb from './Airbnb';
import './shared/styles/resets.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Airbnb/>
  </React.StrictMode>
);

reportWebVitals();
