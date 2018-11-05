import * as actions from '../actions/actions';

export default function booksReducer(state = [
    { id:1, title: "tt", author: "test", editable: false},
    { id:2, title: "aa", author: "test", editable: false}],
    action) 
 {
    switch (action.type) {
        case actions.ADD_BOOK:

        default:
            return state;

    }
}