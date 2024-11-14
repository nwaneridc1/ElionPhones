import React, { useContext } from 'react';
import { ShopContext } from '../Context/Shop context'; // Correct the import path for your context
import Title from './Title';

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount } = useContext(ShopContext); // Corrected variable name for deliveryFee

  const subtotal = getCartAmount();
  // If subtotal is 0, set delivery fee to 0
  const effectiveDeliveryFee = subtotal === 0 ? 0 : deliveryFee;
  const totalAmount = subtotal + effectiveDeliveryFee;

  // Format numbers with a thousands separator and ensure 2 decimal places for the amounts
  const formatAmount = (amount) => {
    return amount.toLocaleString('en-NG', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'Cart'} text2={'Totals'} />
      </div>
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {formatAmount(subtotal)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Delivery Fee</p>
          <p>{currency} {formatAmount(effectiveDeliveryFee)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <b>Total</b>
          <b>{currency} {formatAmount(totalAmount)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
