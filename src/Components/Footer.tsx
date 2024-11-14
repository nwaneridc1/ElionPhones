import React from 'react';
import logo from '../Assets/Images/ELION.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 " style={{ height: 'auto',marginTop:"8vh" }}>
      <div className='flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 h-auto'>
        <div className='flex items-center justify-center'>
          <img className='w-27' src={logo} alt="Elion Logo" />
        </div>

        <div className='flex flex-col justify-center'style={{marginLeft:"7%"}}>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Delivery</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div className='flex flex-col justify-center'style={{marginLeft:"7%"}}>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li><a href="tel:+2349166418607" className="hover:underline">+2349166418607</a></li>
            <li><a href="mailto:elionphones@gmail.com" className="hover:underline">elionphones@gmail.com</a></li>
            <li><a href='https://wa.me/2349166418607' className="hover:underline">Whatsapp</a></li>
            <li><a href='https://www.instagram.com/elionphones?igsh=MTh5NXNrOW02cDZt' className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Ensure the copyright section is part of the footer */}
      <div className="flex flex-col items-center justify-center mt--30">
        <hr className="border-gray-300 w-full" />
        <p className='py-3 text-sm text-center text-gray-600'>Copyright 2024 @elionphones.com</p>
      </div>
    </footer>
  );
};

export default Footer;
