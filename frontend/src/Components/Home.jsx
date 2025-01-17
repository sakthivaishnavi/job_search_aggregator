import React from 'react'

const Home = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='bg-black text-white opacity-90 p-10 rounded-lg flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-4xl font-bold '>Job Portal</h1>
      <p className='font-semibold text-2xl'>Welcome to the Job Portal</p>
      <div className='flex gap-5 items-center justify-center'>
      <a href='/signup' className='p-3 rounded-full bg-white text-black'>Signup</a>
      <a href='/login' className='p-3 rounded-full bg-white text-black'>Login</a>  
      </div>
      </div> 
    </div>
  )
}

export default Home