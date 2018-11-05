import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div `
    width: calc(100%/5);
	height: 260px;
    margin-right: 12px;
	border-radius: 15px;
	padding: 1.5rem;
	background: white;
	position: relative;
	display: flex;
	align-items: flex-end;
	transition: 0.4s ease-in;
    margin-bottom: 35px;
	box-shadow: 0 7px 10px rgba(black, 0.5);
    :hover {
		transform: translateY(20px)
    }
    :hover::before {
        opacity: 1;
    }
    ::before {
        content: "";
		position: absolute;
		top: 0;
		left: 0;
		display: block;;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		background: rgba(black, 0.6);
		z-index: 2;
		transition: 0.5s;
		opacity: 0;
    }
`
const CardInfo = styled.div `
	position: relative;
	z-index: 3;
	color: #fff;
	opacity: 0;
	transform: translateY(30px);
	transition: 0.5s;
    :hover {
        opacity: 1;
	    transform: translateY(0);
        }
`
const Image = styled.img `
    width: 100%;
	height: 100%;
	${'' /* object-fit: cover; */}
    max-width: 100%;
	position: absolute;
    background-image: linear-gradient(to right, #0099f7 , #f11712);
	top: 0;
	left: 0;
	border-radius: 15px;
`
const CardTitle = styled.h1 `
    margin: 0;
    z-index: 10;
    font-size: 14px;
    background-color: #fff;
`
const CardDescr = styled.p `
    letter-spacing: 1px;
	font-size: 15px;
	margin-top: 8px;
    font-size: 9px;
`
const BtnAbout = styled.button `
    padding: 0.6rem;
	outline: none;
	border: none;
	border-radius: 3px;
	background: white;
    font-size: 8px;
    margin-right: 7px;
	color: black;
	font-weight: bold;
	cursor: pointer;
	transition: 0.4s ease;
    ::hover {
        background: dodgerblue;
		color: white;
    }
`
const BtnDelete = styled(BtnAbout) `
    background-color: red;
    color: #fff;
`

const CardContent = styled.div `
    display: flex;
    flex-direction: column;
    text-overflow: ellipsis;
    width: 100%;
    margin-bottom: auto;
    overflow: hidden;
`
const BtnContainer = styled.div `
    display: flex;
    flex-direction: row;
`
const BookCard = ({id, title, author, src, click, clickEdit, className}) => (
        <CardContainer className="book-card">
            <Image src={src} className = {className} alt = {className}/>
            <CardContent>
                <CardTitle>{id}</CardTitle>
                <CardTitle>{title}</CardTitle>
                <CardInfo className="book-card__info">
                    <CardDescr>{title}</CardDescr>
                    <CardDescr>{author}</CardDescr>
                    <BtnContainer>
                        <BtnAbout type="button" onClick={clickEdit}>Редактировать</BtnAbout>
                        <BtnDelete type="button" onClick={click}>Удалить</BtnDelete>
                    </BtnContainer>    
                </CardInfo>
            </CardContent>    
        </CardContainer>
        )
export default BookCard;    