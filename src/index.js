import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider , CSSReset } from '@chakra-ui/react';
import theme from "@chakra-ui/theme";
import { Provider } from 'react-redux';
import store from './store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <App />
    </ChakraProvider>
  </Provider>

);

