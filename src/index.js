import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App';
import MuiLogin from './components/muilogin';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiLogin />
  </React.StrictMode>
);

reportWebVitals();
