import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timer from './App';
import Time from "./Time";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer/>
      <Time/>

  </React.StrictMode>
);

