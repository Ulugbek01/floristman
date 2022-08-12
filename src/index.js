import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Root from './root';
import './index.scss';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Root/>
      </Router>
    </QueryClientProvider>
  // </React.StrictMode>
);
