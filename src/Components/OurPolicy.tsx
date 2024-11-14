import React from 'react'

import exchange from '../Assets/Images/exchange-removebg-preview.png'
import quality from '../Assets/Images/quality-removebg-preview.png'
import service from '../Assets/Images/service-removebg-preview.png'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={exchange} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={quality} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
            <img src={service} className='w-12 m-auto mb-5'/>
            <p className='font-semibold'>Best Customer Service</p>
            <p className='text-gray-400'>We offer both online and offline customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy