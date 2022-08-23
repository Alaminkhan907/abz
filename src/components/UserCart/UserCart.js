import React from 'react'

const UserCart = ({user}) => {
    const{id,name,photo ,email, phone, position} =user;
  return (
    <div>
       <img src={photo}/>
       <h3>{name}</h3>
       <h4>{position}</h4>
       <h4>{email}</h4>
       <p>{phone}</p>
    </div>
  )
}

export default UserCart