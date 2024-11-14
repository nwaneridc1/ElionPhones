import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/Shop context';
import Title from '../Components/Title';
import Product from './Product';
import bin from '../Assets/Images/bin.png';
import CartTotal from '../Components/CartTotal';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [userSignedUp, setUserSignedUp] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    phone: '',
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            color: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    setSignupError('');

    try {
      const response = await fetch('http://localhost:5000/User/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          username: formData.username,
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setUserSignedUp(true);
        setShowSignupModal(false);

        toast.success('Signup successful! Redirecting...', {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Debugging
        console.log("Signup successful! Navigating to /placeorder...");

        navigate('/placeorder');
      } else {
        setSignupError(result.message || 'Signup failed. Please try again.');
      }
    } catch (error) {
      setSignupError('An error occurred. Please try again.');
    }
  };

  const handleProceedToCheckout = () => {
    if (!userSignedUp) {
      setShowSignupModal(true);
    } else {
      navigate('/placeorder');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'My'} text2={'Cart'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((Product) => Product._id === item._id);

          return (
            <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols[4fr_2fr_0.5fr] items-center gap-1">
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.color}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) =>
                  e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.color, Number(e.target.value))
                }
                type="number"
                min={1}
                defaultValue={item.quantity}
                className="border max-w-8 sm:max-w-20 px-0 sm:px-2 py-1"
              />
              <img onClick={() => updateQuantity(item._id, item.color, 0)} src={bin} alt="" className="w-10 mr-4 sm:w-10 cursor-pointer" />
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button onClick={handleProceedToCheckout} className="bg-black text-white text-sm my-8 py-3 px-8">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

      {showSignupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-96">
            <h2 className="text-lg font-semibold mb-4">Please Sign Up to Continue</h2>
            {signupError && <p className="text-red-600 text-sm mb-4">{signupError}</p>}
            <form onSubmit={handleSignup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="w-full p-2 mb-3 border rounded"
              />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
                className="w-full p-2 mb-3 border rounded"
              />
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                required
                className="w-full p-2 mb-3 border rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full p-2 mb-3 border rounded"
              />
              <div className="relative">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                  className="w-full p-2 mb-3 border rounded"
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-3 top-2">
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded">
                  Sign Up
                </button>
                {/* <button
                  type="button"
                  onClick={() => setShowSignupModal(false)}
                  className="text-red-600"
                >
                  Close
                </button> */}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
