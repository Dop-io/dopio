import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <div id="editor">
      <App dispatch={store.dispatch} />
    </div>
  </Provider>
);

export default Root;
