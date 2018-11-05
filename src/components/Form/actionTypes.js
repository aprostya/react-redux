export const ADD_BOOK = 'ADD_BOOK';

function addBook(book) {
    return {type: ADD_BOOK,
        book
    };
}

export default addBook;