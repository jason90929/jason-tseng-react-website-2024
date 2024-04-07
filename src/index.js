import React from 'react';
import ReactDOM from 'react-dom/client';
import history from './history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App history={history}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
