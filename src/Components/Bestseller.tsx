import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/Shop context'
import Title from './Title'
import ProductItem from '../Components/ProductItem'


interface Product {
    _id: string;
    image: any;
    name: string;
    price: number;
}

const Bestseller: React.FC = () => {

    const context =useContext(ShopContext)
    const products = context?.products || [];

    const [bestseller, setbestseller] = useState<Product[]>([]);

    useEffect(()=>{
         const bestProduct = products.filter((item)=>(item.bestseller))
         setbestseller(bestProduct.slice(0,5))
    },[])
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptate explicabo accusantium modi asperiores dolores tempore, at autem odit impedit iste dolore nesciunt quas suscipit libero? Ad quibusdam deleniti odit.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestseller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default Bestseller