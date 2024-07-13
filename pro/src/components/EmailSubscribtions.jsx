import React from 'react'

function EmailSubscribtions() {
  return (
    <div className='flex items-center justify-center m-5 p-5 w-full bg-red-500'>
        <div> 
        <form className='text-center'>
        <h1 className='text-2xl'>Ready to watch? Enter your email to create or restart your membership.</h1>
        <input type ='text' placeholder='Email'></input>
        <button className='bg-red-700 text-white font-medium bg-line-500 py-2 px-2 m-4'>Subscribe</button>
        </form>
    </div>
    </div>
  )
}

export default EmailSubscribtions