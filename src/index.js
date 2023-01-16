import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { productList } from './mocks/mock';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(productList.features);
root.render(
  <React.StrictMode>
    <App features={productList.features} />
  </React.StrictMode>
);
