// modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import numeral from 'numeral';

import {
  RouterProvider,
} from 'react-router-dom';

// styling
import './styles/index.scss';

// components 
import router from './pages';

// utils
import reportWebVitals from './reportWebVitals';

// register numeral and locale
numeral.register('locale', 'ar', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  ordinal : function (number) {
    return number === 1 ? '' : 's';
  },
  currency: {
    symbol: '$'
  }
});

numeral.locale('ar');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
