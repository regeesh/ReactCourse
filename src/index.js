import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import StateVars from './components/stateVars';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StateVars></StateVars>
  </React.StrictMode>
);

reportWebVitals();
