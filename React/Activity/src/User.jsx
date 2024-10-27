import React from 'react'

const User = ({username,color}) => {

  return (
    <div>
         <h1 className='user' style={{color:color}}>Hello {username}</h1>
    </div>
  )
}

export default User
