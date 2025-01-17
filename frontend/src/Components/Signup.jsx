import React from 'react'
const Signup = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <form className='bg-black text-white opacity-90 p-10 rounded-lg flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-2xl font-bold'>Signup</h1>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required className='p-2 rounded'/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className='p-2 rounded'/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required className='p-2 rounded'/>
        </div>
        <a href='/login' className='p-3 rounded-full bg-white text-black'>Signup</a>
      </form>
    </div>
  )
}

export default Signup
