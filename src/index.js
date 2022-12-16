import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

  root.render(
    <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ApolloProvider>
  );
