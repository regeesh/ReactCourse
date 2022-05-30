import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
// import LifeCycle from './components/lifeCycle';
import LifeCycleTimer from './components/lifeCycleTimer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LifeCycleTimer />
  </React.StrictMode>
);
// test
reportWebVitals();
