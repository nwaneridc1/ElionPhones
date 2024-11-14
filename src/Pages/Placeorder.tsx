import React from 'react'
import Title from '../Components/Title'
import CartTotal from '../Components/CartTotal'

import stipelogo from '../Assets/Images/stripe.png'

const Placeorder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='First Name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Last Name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='email' placeholder='Email Address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Address'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='number' placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='text' placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type='number' placeholder='Phone Number'/>
      </div>
      {/* Right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
        <Title text1={'Payment'} text2={'Method'}/>
         {/* {payment method selection} */}
        <div className='flex gap-3 flex-col lg:flex-row'>
         <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5border rounded-full`}></p>
          <img src={stipelogo} className='h-7 mx-4 w-10'/>
         </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Placeorder