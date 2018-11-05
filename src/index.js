import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import 'normalize.css';
import BookPage from './components/pages/BookPage';
import booksReducer from './reducers/booksReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(booksReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(<BookPage />, document.getElementById('root'));
serviceWorker.unregister();
