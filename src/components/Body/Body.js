import React, { useEffect, useState } from 'react'
import UserCart from '../UserCart/UserCart';

const Body = () => {
const [user , setUser] =useState([]);

useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=2')
    .then((res)=>res.json())
    .then((data)=>{
       // console.log(data.users);
        setUser(data.users);
    })
},[]) 
  return (
    <div>
        <h1>Working with GET request</h1>
        <h3>user length {user.length}</h3>
        <div>
          {
            user.map(user =><UserCart key={user.id} user={user}></UserCart>)
          }
        </div>
        
    </div>
  )
}

export default Body