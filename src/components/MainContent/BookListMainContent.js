import React from 'react';
import styled from 'styled-components';
import SelectGroup from './../MainContent/SelectGroup';
import Button from './ButtonAdd';
import BookCard from '../BookCard/BookCard';
import BookList from './../BookCard/BookCardsList';
// import Form from '../Form/showResults';
import Form from '../Form/Form';

const Content = styled.main `
    width: 100%;
`
const Wrapper = styled.div `
    display:flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`
const BookListContainer = styled.div `
    width: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const BookListTitle = styled.h1 `
    color: #eb1777;
    font-size: 24px;
`
const ButtonsContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
`
export default class BookMainContent extends React.Component{
    state = {
       showPopup: false,
    };
    togglePopupHandler = () => {
        this.setState( { showPopup: true } );
      }
    togglePopupCancel = () => {
        this.setState( { showPopup: false } );
    }  
    render() {
        let popup = null;
        if(this.state.showPopup) {
            popup = (
                <div className="overlay">
                    <Form className="popup" click={this.togglePopupCancel}/>  
                </div>    
            )
        }
        return (
        <Content>
        {popup}
            <Wrapper>
            <BookListContainer>
                <ButtonsContainer>
                    <Button type ="button" onClick = {this.togglePopupHandler}>Добавить книгу</Button>
                    <SelectGroup/>  
                </ButtonsContainer>
                <BookListTitle>Список добавленных книг</BookListTitle>
                <BookList/>
            </BookListContainer>
            </Wrapper>    
        </Content>    
        )
    }
}