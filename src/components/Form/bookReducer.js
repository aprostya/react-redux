import { combineReducers } from 'redux'
import {
  ADD_BOOK,
} from './actionTypes.js'



function books(state = {}, action = ADD_BOOK){
    switch (action.type) {
        case ADD_BOOK:
        return Object.assign({}, state, {books: [
            ...state.books, {author: action.book.author, isbn: action.book.isbn}
        ]})        
        default:
          return state;
    }

}

export default books;