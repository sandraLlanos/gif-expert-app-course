import { useState } from 'react'

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
        <form onSubmit={onSubmit}>
        <input 
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    )
}
