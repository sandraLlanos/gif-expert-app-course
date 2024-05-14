import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onAddCategories}) => {
  console.log('cat',onAddCategories)

  const [inputValue, setInputValue] = useState('One Push')

  const onInputChange = (event) => {
    // console.log('event :>> ', event.target.value);
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    // the input value will update the parent
    // communication btw components through props
    // onAddCategories(categories => {
    //   console.log([...categories, inputValue])
    // })
    if (inputValue.trim().length <=1) return;
    onAddCategories(categories => [...categories, inputValue]);
    // Clean Input value
    setInputValue('');
  }

  return (
    // you can use Form as a
    //  parent as fragments do, you can't use sibling elements without a wrapper
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
