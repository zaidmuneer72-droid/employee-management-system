import React from 'react'

const Header = (props) => {
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeuser('') // Call the state update in App.js
  }
  
  return (
    <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
        <h1 className='text-white text-xl sm:text-2xl font-medium '>Hello <br/> 
          <span className='text-2xl sm:text-3xl font-semibold '>
            {props.data?.firstName || "Admin"} 👋
          </span> 
        </h1>
        <button onClick={logoutUser} className='bg-red-600 text-white px-4 sm:px-5 py-2 rounded-sm text-base sm:text-lg font-medium w-full sm:w-auto'>Log Out</button>
    </div>
  )
}

export default Header