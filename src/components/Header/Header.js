import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header `
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(to right, #0099f7 , #f11712);
    justify-content: center;
`
const HeaderStyledContent = styled.div `
    display: flex;
    flex-direction: row;
    max-width: 900px;
`

const HeaderTitleStyled = styled.h1 `
    color: #fff;
    text-shadow: 1px 5px 7px black;
`

export default class Header extends React.Component {
    render() {
        return (
        <HeaderStyled>
            <HeaderStyledContent>
                <HeaderTitleStyled>Book List</HeaderTitleStyled>
            </HeaderStyledContent>
        </HeaderStyled>
        );
    }
}
