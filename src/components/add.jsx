import React,{useState} from 'react'
import Display from './display';

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
    setInputArray([...inputArray, searchTerm]);
    setSearchTerm('');
  };


  return (
      <form>
        <input type="text" placeholder='search first_name'  onChange={handleInputChange}/>
      <button onClick={handleClick}>+</button>
      <Display usersData={inputArray}></Display>

        
      </form>
  )
}
