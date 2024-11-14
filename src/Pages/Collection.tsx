import React, { useEffect, useState } from 'react';
import { useShopContext } from '../Context/Shop context'; // Assuming you have a custom hook to safely access context
import dropdown from '../Assets/Images/menu-removebg-preview.png';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

interface Product {
  _id: string;
  image: any;
  name: string;
  price: number;
  category: string;
  type: string;
}

const Collection: React.FC = () => {
  // Use custom hook to get all necessary values in one destructuring
  const { search, showSearch, products = [] } = useShopContext(); // Using the custom hook here

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState<Product[]>(products); // Initial state uses products
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<string>('relevant');

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    let filteredProducts = [...products];

    // Apply search filter if search is active
    if (showSearch && search) {
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by selected categories
    if (selectedCategory.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        selectedCategory.includes(product.category)
      );
    }

    // Filter by selected types
    if (selectedType.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        selectedType.includes(product.type)
      );
    }

    // Sort products based on selected sortOrder
    if (sortOrder === 'low-high') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'high-low') {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    // Update the filtered products state
    setFilterProducts(filteredProducts);

  }, [products, search, showSearch, selectedCategory, selectedType, sortOrder]); // Add search and showSearch to dependencies

  // Handle category checkbox change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(prevState =>
      prevState.includes(category)
        ? prevState.filter(item => item !== category)
        : [...prevState, category]
    );
  };

  // Handle type checkbox change
  const handleTypeChange = (type: string) => {
    setSelectedType(prevState =>
      prevState.includes(type)
        ? prevState.filter(item => item !== type)
        : [...prevState, type]
    );
  };

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={dropdown}
            alt="Dropdown icon"
          />
        </p>

        {/* Categories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                checked={selectedCategory.includes('Phones')}
                onChange={() => handleCategoryChange('Phones')}
              />
              Phones
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                checked={selectedCategory.includes('Accessories')}
                onChange={() => handleCategoryChange('Accessories')}
              />
              Accessories
            </label>
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                checked={selectedType.includes('Iphones')}
                onChange={() => handleTypeChange('Iphones')}
              />
              Iphones
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                checked={selectedType.includes('Androids')}
                onChange={() => handleTypeChange('Androids')}
              />
              Androids
            </label>
            <label className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                checked={selectedType.includes('Others')}
                onChange={() => handleTypeChange('Others')}
              />
              Others
            </label>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select
            className="border-2 border-gray-300 text-sm px-2"
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id} // Use the unique product ID as the key
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
