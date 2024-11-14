import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { products as initialProducts } from '../Assets/Images/assets'; // Ensure this path is correct
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// Define the Product interface
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  category: string;
  subCategory: string;
  colors: string[];
  date: number;
  bestseller: boolean;
  type: string;
}

// Define the context type
interface ShopContextType {
  products: Product[];
  currency: string;
  deliveryFee: number;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  setDeliveryFee: React.Dispatch<React.SetStateAction<number>>; // For updating delivery fee
  cartItems: CartItems;
  addToCart: (itemId: string, color: string) => void;
  getCartCount: () => number;
  updateQuantity: (itemId: string, color: string, quantity: number) => void;
  getCartAmount: () => number;
}

// Define props for the provider
interface ShopContextProviderProps {
  children: ReactNode;
}

// Define the type for cart items
type CartItems = {
  [itemId: string]: {
    [color: string]: number;
  };
};

// Create the context
export const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Custom hook for easier context consumption
export const useShopContext = () => {
  const context = React.useContext(ShopContext);
  if (!context) {
    throw new Error('useShopContext must be used within a ShopContextProvider');
  }
  return context;
};

// ShopContextProvider Component
const ShopContextProvider: React.FC<ShopContextProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [currency, setCurrency] = useState<string>('NGN');
  const [deliveryFee, setDeliveryFee] = useState<number>(10000); // Initial value
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate

  const [cartItems, setCartItems] = useState<CartItems>({});

  useEffect(() => {
    // Directly setting the delivery fee to 10000
    setDeliveryFee(10000);

    // Fetch products or perform other tasks if necessary
    const fetchProducts = async () => {
      try {
        const data = initialProducts; // Mock data
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // The empty dependency array ensures this runs only once when the component is mounted.

  // Function to add items to cart
  const addToCart = async (itemId: string, color: string) => {
    if (!color) {
      toast.error('Select Product Color');
      return;
    }

    let cartData: CartItems = structuredClone(cartItems);

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    if (cartData[itemId][color]) {
      cartData[itemId][color] += 1;
    } else {
      cartData[itemId][color] = 1;
    }

    setCartItems(cartData);
  };

  const getCartAmount = (): number => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        for (const color in cartItems[itemId]) {
          const quantity = cartItems[itemId][color];
          if (quantity > 0) {
            totalAmount += itemInfo.price * quantity;
          }
        }
      }
    }
    return totalAmount;
  };

  const getCartCount = (): number => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      for (const color in cartItems[itemId]) {
        totalCount += cartItems[itemId][color];
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId: string, color: string, quantity: number) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][color] = quantity;
    setCartItems(cartData);
  };

  const value = {
    products,
    currency,
    deliveryFee,
    setDeliveryFee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    setCurrency,
    cartItems,
    addToCart,
    getCartAmount,
    getCartCount,
    updateQuantity,
    navigate
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
