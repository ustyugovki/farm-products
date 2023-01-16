import React from 'react';

import './App.css';

import PageWrapper from '../layout/page-wrapper/page-wrapper';
import { productList } from '../../mocks/mock';

function App() {
  return <PageWrapper productList={productList} />;
}

export default App;
