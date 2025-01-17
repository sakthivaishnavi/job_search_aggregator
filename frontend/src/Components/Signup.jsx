import React from 'react'
const Signup = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <form className='bg-cyan-100 opacity-90 p-10 rounded-lg flex flex-col gap-5 justify-center items-center'>
        <h1 className='text-2xl font-bold'>Signup</h1>
      <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <a href='/login' className='p-3 rounded-full bg-black text-white'>Signup</a>
        </form>
    </div>
  )
}

export default Signup
