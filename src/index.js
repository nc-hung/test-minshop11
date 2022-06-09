import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Layout/App/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./ReduxStore/reducer/rootReducer.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
const reduxStore = createStore(rootReducer)

root.render(
  <React.StrictMode>
   <Provider store = {reduxStore}>
   <App />
   </Provider> 
  </React.StrictMode>
);

