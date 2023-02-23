import React from 'react';

export default function Display({usersData}) {

  console.log(usersData);


  return (

    <ul>
      {
        usersData.map((arr) => {
          <li>{arr}</li>
        })
      }
    </ul>
   
  )
}
