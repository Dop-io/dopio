import React from 'react';
import './css/imports.css'; // Import PostCSS files
import configureStore from './store/configureStore';
import Root from './components/Root';

const devMode = process.env.NODE_ENV === 'development';
const store = configureStore(devMode);

const Editor = () => {
  return <Root store={store} />
}

export default Editor