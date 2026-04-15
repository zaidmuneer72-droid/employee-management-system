import React from 'react'

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeuser('') // Call the state update in App.js
  }
  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-white text-2xl font-medium '>Hello <br/> 
          <span className='text-3xl font-semibold '>
            {props.data?.firstName || "Admin"} 👋
          </span> 
        </h1>
        <button onClick={logoutUser} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header