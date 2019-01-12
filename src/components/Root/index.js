import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import createStore from 'components/Root/createReduxStore';


const Root = ({ initialState = {} }) => (
  <Provider store={ createStore( initialState ) }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;