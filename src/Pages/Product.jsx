import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/Shop context';
import products from '../Assets/Images/assets';
import StarRating from '../Components/Starrating';

import boy from '../Assets/Images/feel the goodness.png'
import { toast } from 'react-toastify';


const Product = () => {
  const {productId} = useParams();
  const {products,addToCart} = useContext(ShopContext)
  const [productData,setProductData] = useState(false)
  const [image, setImage] = useState('')

  const [color, setColor] = useState('')

  const fetchProductData = async () =>{
     products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        
        return null
      }
     })
  }
  useEffect(()=>{
    fetchProductData()
  },[productId])


  return productData? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 'style={{paddingBottom:'20vh',marginLeft:'auto',marginRight:'auto'}}>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse  sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto  justify-between sm:justify-normal sm:w-[13.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' style={{borderRadius:"10px",}}/>
              ))
            }
          </div>
          <div className='w-full' style={{width:"auto"}}>
            <img src={image} className='w-full h-100'/>
          </div>

          <div className="flex-1 sm:w-[40%] space-y-6 p-4">
            <h1 className="text-4xl font-extrabold text-black leading-tight tracking-tight">
              {productData.name}
            </h1>
            <p className='flex items-center gap-1 mt-2'><StarRating rating={4} /> <p className='pl-2'>(122)</p>
            </p>
            <p className="text-2xl font-semibold text-black">NGN {`${productData.price}`}</p>
            <p className="text-lg text-black opacity-80">{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>Select Color</p>
              <div className='flex gap-3 '>
                {productData.colors.map((item,index)=>(
                  <button onClick={()=>setColor(item)} className={`border bg-gray-100 py-2 px-4 ${item === color ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            
            

            {/* Add to Cart Button */}
            <button
  className="mt-6 py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105"
  onClick={() => {
    // Show an alert
    toast.success(`Added ${productData.name} (${color}) to the cart!`, {
      autoClose: 5000,  // Toast will auto-close after 3 seconds
    });

    
    // Call addToCart function
    addToCart(productData._id, color);
  }}
>
  Add to Cart
</button>
            <hr className='mt-10 sm:w-4/5'/>
            <div className='text-m text-gray-400 mt-3 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>Easy Return Policy</p>
            </div>
          </div>

        </div>
      </div>
      {/* Description and reviews section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Descriptions</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>an bewfihinei nwdjidbh jdwb jbdwj dwhibdw jciuhdugi owi h8rhiehnk h8guhnwkiuw ribjegfifwi fhwugfuwebnjweg 8bwufbuvdyvduwe fguegubwbdqufuiebuguu buuweyvuebgeuy7guwe ubjdbvdyqvdq cuvqvyv qunsiuqi bqujb</p>
          <p>eh8ywuxqi iguvjhqs xjbq guebjqw j uegdbh jxbuqwvxh xm uqwgy  abuyqy  v qn jwhuwdgyvjx wjdgbyevhj xkjnuidyqw wzn  oijsbw uq x</p>
        </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product