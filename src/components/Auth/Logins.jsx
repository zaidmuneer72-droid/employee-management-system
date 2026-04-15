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
    <div className='flex h-screen bg-black w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20 md:p-40'>
        <form onSubmit={(e) => { submithandler(e) }}
          className='flex flex-col items-center justify-center'>
          
          <input
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            required 
            className='border-2 border-emerald-600 rounded-full py-3 text-xl outline-none bg-transparent text-gray-400 placeholder:text-gray-400 px-5' 
            type="email" 
            placeholder='Enter Your Email' 
          />

          <div className='relative flex flex-col items-center mt-3'>
            <input
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              required 
              type={showPassword ? "text" : "password"} 
              className='border-2 border-emerald-600 rounded-full py-3 text-xl outline-none text-gray-400 bg-transparent placeholder:text-gray-400 px-5' 
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

          <button className='border-2 bg-emerald-600 rounded-full py-3 text-xl text-white mt-5 outline-none border-none px-10'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login