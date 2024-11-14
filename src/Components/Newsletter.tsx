import React from 'react'

const Newsletter = () => {

    const onSubmitHandler = (event: { preventDefault: () => void }) => {
        event.preventDefault()
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 sm:font-small'>Subscribe now and get amazing discounts</p>
        <p className='text-gray-400 mt-3'></p>
        <form onSubmit={onSubmitHandler} className='w-3/9 sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter Your Email'/>
            <button type='submit' className='bg-black text-white text-xs px-6 py-3'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default Newsletter