import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const options = [
    { value: 'header', label: 'Заголовок' },
    { value: 'publish', label: 'Год публикации' },
  ];

const customStyles = {
    option: (base, state) => ({
      ...base,
      borderBottom: '1px dotted pink',
      padding: 10,
      backgroundColor: state.isSelected ? '#eb1777' : 'white',
      color: state.isSelected ? '#fff': '#eb1777',
    }),
    control: () => ({
      width: 'auto',
      padding: 2,
      cursor: 'pointer',
      display: 'flex',
      border: '2px solid #eb1777',
      color: '#eb1777'
    }),
    dropdownIndicator: () => ({
        fill: '#eb1777'
    }),
    clearIndicator: () => ({
        fill: '#eb1777'
    }),
    indicatorSeparator: () => ({
        backgroundColor: '#eb1777',
        width: 1,
        height: 11,
    }),
    placeholder: () => ({
      color: '#eb1777',      
      'font-size': 14
    }),
    singleValue: () => ({
     transition:'opacity 300ms',
    })
  }
  
  export default class SelectGroup extends React.Component {
    state = {
      selectedOption: null,
    }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
    }
    render() {
      const { selectedOption } = this.state;
  
      return (
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          isClearable
          styles={customStyles}
          placeholder={'Сортировать по'}
        />
      );
    }
  }