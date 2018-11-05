import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import styled from 'styled-components';
import store from "./store";
// import showResults from "./showResults";
import FieldLevelValidationForm from "./FieldLevelValidationForm.js";


const Title = styled.h2 `
  text-align: center;
  font-size: 20px;
`
const CloseContainer = styled.span `
  display: inline-block;
  cursor: pointer;
  width: auto;
  margin-left: auto;
  position: absolute;
  right: 12px;
  top: 4px;
  height: auto;
`

class Form extends React.Component{
  state = {
     showPopup: true,
  };
  togglePopupHandler = () => {
      this.setState( { showPopup: false } );
    }

  render() {
      let popuparea = null;
      if(this.state.showPopup) {
          popuparea = (
            <div className={this.props.className}>
            <CloseContainer title="закрыть"  onClick = {this.props.click}>
              <svg viewport="0 0 12 12" version="1.1" width="20px" height="20px"
                  xmlns="http://www.w3.org/2000/svg">
                  <line x1="2" y1="16.5" x2="16.5" y2="3" stroke="black" strokeWidth="2"/>
                  <line x1="2" y1="2" x2="16.5" y2="16.5" stroke="black" strokeWidth="2"/>
              </svg>
            </CloseContainer>
            <Title>Добавить книгу!</Title>
            <FieldLevelValidationForm/>
            <Values form="fieldLevelValidation" />
          </div>
          )
      }
    return (
        <Provider store={store}>
       {popuparea}
      </Provider>
      )
    }
  }
export default Form;