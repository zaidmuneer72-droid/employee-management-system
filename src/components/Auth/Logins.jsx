import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
   setEmail("")
   setPassword("")
  }

  return (
    <div className='flex min-h-screen bg-black w-full items-center justify-center px-4 py-8'>
      <div className='border-2 rounded-xl border-emerald-600 p-6 sm:p-10 md:p-14 w-full max-w-md'>
        <form onSubmit={(e) => { submithandler(e) }}
          className='flex flex-col items-center justify-center'>
          
          <input
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            required 
            className='border-2 border-emerald-600 rounded-full py-3 text-base sm:text-lg md:text-xl outline-none bg-transparent text-gray-400 placeholder:text-gray-400 px-5 w-full' 
            type="email" 
            placeholder='Enter Your Email' 
          />

          <div className='relative flex flex-col items-center mt-3 w-full'>
            <input
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              required 
              type={showPassword ? "text" : "password"} 
              className='border-2 border-emerald-600 rounded-full py-3 text-base sm:text-lg md:text-xl outline-none text-gray-400 bg-transparent placeholder:text-gray-400 px-5 w-full' 
              placeholder='Enter Password'
            />
            
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-4 top-4 text-xs text-emerald-600 font-bold uppercase cursor-pointer'
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button className='border-2 bg-emerald-600 rounded-full py-3 text-base sm:text-lg md:text-xl text-white mt-5 outline-none border-none px-10 w-full'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login