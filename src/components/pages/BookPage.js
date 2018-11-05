import React from 'react';
import Header from './../Header/Header';
import BookMainContent from './../MainContent/BookListMainContent';
import styled from 'styled-components';


export default class BookPage extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <BookMainContent/>
            </>    
        );
    }
}