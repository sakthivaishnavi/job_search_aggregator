import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <form className='bg-black text-white opacity-90 p-10 rounded-lg flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-2xl font-bold'>Login</h1>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="username">Username:</label>
          <input className='p-2 rounded' type="text" id="username" name="username" required />
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="password">Password:</label>
          <input className='p-2 rounded' type="password" id="password" name="password" required />
        </div>
        <a href='/hero' className='p-3 rounded-full bg-white text-black mt-5'>Login</a>  
      </form>
    </div>
  )
}

export default Login