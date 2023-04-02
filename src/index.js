import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// importing react router for routing 
import {BrowserRouter} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // importing router component
  <BrowserRouter>
   <React.StrictMode>
    {/* importing main component App */}
    <App />
  </React.StrictMode>
  </BrowserRouter>
 
);


