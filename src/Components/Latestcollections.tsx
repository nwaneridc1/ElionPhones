import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../Context/ShopContext'; // Make sure this path is correct
import Title from './Title';
import ProductItem from './ProductItem';
import { ShopContext } from '../Context/Shop context';

interface Product {
    _id: string;
    image: any;
    name: string;
    price: number;
}

const LatestCollections: React.FC = () => {
    const context = useContext(ShopContext);
    
    // Ensure context is defined and products is an array
    const products = context?.products || []; // Default to an empty array if context is undefined

    const [latestProducts, setLatestProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Check if products is indeed an array
        if (Array.isArray(products)) {
            setLatestProducts(products.slice (0, 10));
        }
    }, [products]);

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'PRODUCT'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gry-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet quos, recusandae praesentium libero vel labore nam? Debitis dolor odit quidem natus 
                    perspiciatis, aperiam accusantium a, laborum, porro impedit quam dolorum?
                </p>
            </div>
            {/* Rendering products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {latestProducts.map((item) => (
                    <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default LatestCollections;
