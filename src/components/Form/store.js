import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import booksReducer from './bookReducer';

// const initialState = { 
//   books: [{}] 
// };
const initialState = {
  books: [
  {
      id: 1,
      // authors: [
      // {lastName: "HAwking", firtsName: "Steven"},
      // {lastName: "Milonov", firtsName: "Vitaliy"}
      // ],
      title: "To be or not to be",
      isbn: "123-4-56-789123-1"
  }
  ]
}
const reducer = combineReducers({
  form: reduxFormReducer,
  books: booksReducer
  // mounted under "form"
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer, initialState);

export default store;
