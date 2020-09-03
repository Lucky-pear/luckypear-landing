import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppContainer';
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import { client } from './gql';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
