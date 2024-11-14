import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Placeorder from './Pages/Placeorder'
import Orders from './Pages/Orders'
import './App.css'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
import Navbar from './Components/Navbar'
import Collection from './Pages/Collection'
import Product from './Pages/Product'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Components/Screens/Signup'
import Login from './Components/Screens/Login'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' style={{marginTop:"-70px"}}>
      <ToastContainer/>
       <div className='par' ><Navbar/></div>
       <Searchbar/>
        <Routes>
        {/* <Route path='/' element={<Login/>} /> */}
        <Route path='Signup' element={<SignUp/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/placeorder' element={<Placeorder/>}/>
          <Route path='/placeorder' element={<Placeorder/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App