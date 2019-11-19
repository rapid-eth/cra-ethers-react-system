import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { EthersProvider } from 'ethers-react-system';

ReactDOM.render(
  <EthersProvider>
    <App />
  </EthersProvider>,
  document.getElementById('root')
);

