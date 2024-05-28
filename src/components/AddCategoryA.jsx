import React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const AddCategoryA = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit} aria-label='form'>
          <input 
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(event) => onInputChange(event)}
          />
        </form>
        )
}


AddCategoryA.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

