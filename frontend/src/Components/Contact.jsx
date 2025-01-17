import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='bg-black text-white opacity-90 p-10 rounded-lg flex flex-col gap-5 justify-center items-center'>
      <h1 className='text-2xl font-bold'> Contact Us</h1>
      <p className='font-semibold'> Email : 
        <a href="mailto:sakthivaishnavi12@gmail.com" className='underline'>sakthivaishnavi12@gmail.com</a>
      </p>
      <p className='font-semibold'> Phone : 1234567890</p>
      </div>
    </div>
  )
}

export default Contact