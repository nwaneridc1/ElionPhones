import React, { useContext, useState } from 'react';
import logo from '../Assets/Images/Logo.png'; 
import { Link, NavLink } from 'react-router-dom';
import search from '../Assets/Images/search-removebg-preview.png';
import icons from '../Assets/Images/icon.png';
import cart from '../Assets/Images/cart-removebg-preview.png';
import menu from '../Assets/Images/menu-removebg-preview.png';
import dropdown from '../Assets/Images/left-removebg-preview.png';
import { ShopContext } from '../Context/Shop context';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {setShowSearch,getCartCount} = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-5 font-medium '>
      <NavLink to="/"><img src={logo} className='w-36' alt='Company Logo' /></NavLink>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700 '>
          <NavLink 
            className='flex flex-col items-center text-gray- 700  hover:text-gray-900 no-underline' 
            style={{ textDecoration: 'none' }} 
            to="/">
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink 
            className='flex flex-col items-center text-gray-700  hover:text-gray-900 no-underline' 
            style={{ textDecoration: 'none' }} 
            to="/collection">
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink 
            className='flex flex-col items-center text-gray-700  hover:text-gray-900 no-underline' 
            style={{ textDecoration: 'none' }} 
            to="/about">
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink 
            className='flex flex-col items-center text-gray-700  hover:text-gray-900 no-underline' 
            style={{ textDecoration: 'none' }} 
            to="/contact">
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={search} className='w-10 cursor-pointer' alt='Search' />
        <div className='relative group'>
          <img src={icons} className='w-10 cursor-pointer' alt='User Menu' />
          <div className='absolute right-0 hidden group-hover:block bg-slate-100 rounded shadow-md'>
            <p className='cursor-pointer hover:text-black py-2 px-4'>Profile</p>
            <p className='cursor-pointer hover:text-black py-2 px-4'>Orders</p>
            <p className='cursor-pointer hover:text-black py-2 px-4'>Logout</p>
          </div>
        </div>
        <Link to='/cart' className='relative'>
          <img src={cart} className='w-10' alt='Cart' />
          <p className='absolute right-[-1px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
        <img onClick={() => setVisible(!visible)} src={menu} className='w-10 cursor-pointer sm:hidden' alt='Menu' />
      </div>

      {/* Sidebar menu for smaller screens */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white shadow-lg transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex items-center justify-between p-4'>
          <div className='flex items-center gap-4'>
            <img className='h-7 rotate-180 cursor-pointer' src={dropdown} onClick={() => setVisible(false)} alt='Close Menu' />
            {/* <p className='text-gray-600'>Back</p> */}
          </div>
        </div>
        <ul className='flex flex-col text-gray-600'>
          <NavLink onClick={()=>setVisible(false)} to="/" className='p-4 hover:bg-gray-100'>HOME</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/collection" className='p-4 hover:bg-gray-100'>COLLECTION</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/about" className='p-4 hover:bg-gray-100'>ABOUT</NavLink>
          <NavLink onClick={()=>setVisible(false)} to="/contact" className='p-4 hover:bg-gray-100'>CONTACT</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
