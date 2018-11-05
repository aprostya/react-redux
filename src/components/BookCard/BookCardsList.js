import React from 'react';
import styled from 'styled-components';
import BookCard from './BookCard';
import store  from '../Form/store';
import addBook from '../Form/actionTypes';
import BookContainer from '../../containers/BookContainer';


const BookCardsContainer= styled.section `
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border: 2px dotted #eb1777;
    min-height: 400px;
    margin-top: 14px;
    z-index: 2;
    padding: 40px;
`

const BookList = (books, addBook) => {
    const deletePersonHandler = (personIndex) => {
        // const books = [...this.state.books];
        // books.splice(personIndex, 1);
        // this.setState({books: books});
        store.dispatch(addBook({author: "New author", isbn: "123-4-56-789123-4"}))
    }
    const showArray = () => {
        console.log(books);
    }
       // const transformedBooks = books.map(book => {
        //     const props = {
        //         ...book
        // }
        // return(
        //         <BookCard 
        //         key = {book.id}
        //         {...book}
        //         descr2 = {book.isbn}
        //         // click = {() => deletePersonHandler(index)}
        //         // clickEdit = {() => showArray(index)}
        //         />
        //     )
        // });
        return(
            <BookCardsContainer>
                <BookCard descr = {books.title} clickEdit = {showArray}/>
           </BookCardsContainer>
        )
}
export default BookList;