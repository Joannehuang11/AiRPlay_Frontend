import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PageSetup, PageStart } from './PageStart';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, Spacer } from '@chakra-ui/react';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>

      <PageStart />
      <PageSetup />

    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


