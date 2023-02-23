import React,{useState} from 'react'

export default function Add() {


  const [searchTerm, setSearchTerm] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [inputArray, setInputArray] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setInputVal(searchTerm);
    setInputArray([...inputArray, inputVal]);
    setSearchTerm('');
  };


  return (
      <form>
        <input type="text" placeholder='search first_name'  onChange={handleInputChange}/>
      <button onClick={handleClick}>+</button>
      <p>{inputVal}</p>
        {
          inputArray.map((val, index) => (
            <p>{val}</p>
          ))
        }
      </form>
  )
}
