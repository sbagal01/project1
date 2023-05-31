import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>Now The Time is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element);
// }
// setInterval(tick, 1000);
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  
);


