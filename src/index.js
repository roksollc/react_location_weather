// IMPORT PACKAGE REFERENCES
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// IMPORT COMPONENT REFERENCES
import App from './components/App';

// IMPORT CSS
import './styles/index.css';

// IMPORT REDUCERS
import weatherApp from './reducers';

// CREATE STORE
const store = createStore(weatherApp);

// RENDER APP w/PROVIDER
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
