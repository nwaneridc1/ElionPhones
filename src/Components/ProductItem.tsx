import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/Shop context';
// import { ShopContext } from '../Context/ShopContext'; // Ensure this path is correct

interface ProductItemProps {
    id: string;
    image: string[]; // Keep as string[] if multiple images are expected
    name: string;
    price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, image, name, price }) => {
    const context = useContext(ShopContext);
    
    // Check if context is defined and destructure currency
    const currency = context?.currency || 'NGN'; // Default to '$' if currency is undefined

    return (
        <Link className='text-gray-700 cursor-pointer  pb-3' to={`/product/${id}`}>
            <div className='overflow-hidden cursor-pointer bg-gray-100'style={{borderRadius:"10px",height:"auto",paddingTop:"3vh",paddingBottom:"3vh"}}>
                <img
                    className='hover:scale-110 transition ease-in-out'
                    src={image[0]} // Ensure image[0] is valid
                    alt={name}
                />
            </div>
            <p className='pt-3 pb-1 text-sm'style={{marginLeft:"5%"}}>{name}</p>
            <p className='text-sm font-medium'style={{marginLeft:"5%"}}>{`${currency}${price.toFixed(2)}`}</p>
        </Link>
    );
};

export default ProductItem;
