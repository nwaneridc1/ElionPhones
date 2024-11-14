import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shop context'

import sea from '../Assets/Images/search-removebg-preview.png'
import clos from '../Assets/Images/close.png'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {

    const {search, setSearch,showSearch,setShowSearch} = useContext(ShopContext)
    const [visible,setVisible] = useState(false)
    const location = useLocation()

    useEffect(()=>{
       if (location.pathname.includes('collection')) {
        setVisible(true)
       }
       else{
        setVisible(false)
       }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search'  className='flex-1 outline-none bg-inherit text-sm'/>
      <img className='w-10' src={sea}/>
      </div>
      <img className='inline w-8 cursor-pointer' onClick={()=>setShowSearch(false)} src={clos}/>
    </div>
  ) : null
}

export default Searchbar