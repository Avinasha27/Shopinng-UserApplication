

// import { useState, useEffect, useCallback } from 'react';

// const Sidebar = ({ setCategory, setPriceRange, setName }) => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(0);
//   const [searchName, setSearchName] = useState('');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const res = await fetch('https://api.escuelajs.co/api/v1/categories');
//       const categories = await res.json();
//       setCategories(categories);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching categories:', error);
//       setLoading(false);
//     }
//   };

//   const debounce = (func, delay) => {
//     let timeout;
//     return (...args) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => {
//         func(...args);
//       }, delay);
//     };
//   };

//   const handleCategoryChange = (e) => {
//     const selected = e.target.value;
//     setSelectedCategory(selected);
//     setCategory(selected);
//   };

//   const handleMinPriceChange = (e) => {
//     const value = Number(e.target.value);
//     setMinPrice(value);
//     if (value > maxPrice) {
//       setErrorMessage('Min price should be less than or equal to Max price');
//     } else {
//       setErrorMessage('');
//     }
//     setPriceRange([value, maxPrice]);
//   };

//   const handleMaxPriceChange = (e) => {
//     const value = Number(e.target.value);
//     setMaxPrice(value);
//     if (value < minPrice) {
//       setErrorMessage('Max price should be greater than or equal to Min price');
//     } else {
//       setErrorMessage('');
//     }
//     setPriceRange([minPrice, value]);
//   };

//   const handleNameChange = useCallback(
//     debounce((e) => {
//       const name = e.target.value;
//       setSearchName(name);
//       setName(name);
//     }, 5000),
//     []
//   );

//   const clearFilters = () => {
//     setSelectedCategory('');
//     setMinPrice(0);
//     setMaxPrice(4000);
//     setSearchName('');
//     setCategory('');
//     setPriceRange([0, 4000]);
//     setName('');
//   };

//   return (
//     <div className="sticky top-[98px] w-full sm:w-60">
//   {loading ? (
//     <div className="bg-gray-300 animate-pulse shadow-2xl  h-fit  px-10 py-8 rounded-xl border w-full sm:w-60 pb-96">
//       <div className="h-6 bg-gray-400 rounded mb-4"></div>
//       <div className="h-4 bg-gray-400 rounded mb-2 w-3/4"></div>
//       <div className="h-4 bg-gray-400 rounded mb-4"></div>
//       <div className="h-6 bg-gray-400 rounded mb-2"></div>
//       <div className="h-4 bg-gray-400 rounded mb-4 w-3/4"></div>
//       <div className="h-6 bg-gray-400 rounded mb-2"></div>
//     </div>
//   ) : (
//     <div className="bg-orange-200 shadow-2xl h-fit px-10 py-8 rounded-xl border w-full sm:w-60 ml-3">
//       <h2 className="text-2xl text-black font-bold mb-4">Filter</h2>
//       <div className="mb-4">
//         <h3 className="font-bold text-black mb-2">Category</h3>
//         <select
//           className="w-full bg-orange-100 text-black border rounded-xl py-1 p-2"
//           value={selectedCategory}
//           onChange={handleCategoryChange}
//         >
//           <option value="">All Categories</option>
//           {categories.slice(0, 5).map((category) => (
//             <option key={category.id} value={category.name}>
//               {category.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="mb-4">
//         <h3 className="font-bold text-black mb-2">Search by Name</h3>
//         <input
//           type="text"
//           className="w-full bg-orange-100 text-black border rounded-xl py-1 p-2"
//           value={searchName}
//           onChange={(e) => {
//             setSearchName(e.target.value);
//             handleNameChange(e);
//           }}
//           placeholder="Search by name"
//         />
//       </div>
//       <div className="mb-4">
//         <h3 className="font-bold text-black mb-2">Price Range</h3>
//         <div className="flex gap-4 items-center">
//           <div className="flex flex-col">
//             <label className="text-sm text-black">Min Price: ${minPrice}</label>
//             <input
//               type="range"
//               className="w-full"
//               value={minPrice}
//               min="0"
//               max={4000}
//               onChange={handleMinPriceChange}
//             />
//             <label className="text-sm text-black">Max Price: ${maxPrice}</label>
//             <input
//               type="range"
//               className="w-full"
//               value={maxPrice}
//               min="0"
//               max={4000}
//               onChange={handleMaxPriceChange}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <button
//           onClick={clearFilters}
//           className="w-20 bg-red-600 text-white py-2 rounded-xl mt-4"
//         >
//           Clear
//         </button>
//       </div>
//     </div>
//   )}
// </div>

//   );
// };

// export default Sidebar;
import { useState, useEffect, useCallback } from 'react';

const Sidebar = ({ setCategory, setPriceRange, setName }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchName, setSearchName] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/categories');
      const categories = await res.json();
      setCategories(categories);
      setLoading(true);
    } catch (error) {
      console.error('Error fetching categories:', error);
      // setLoading(false);
    }
      finally {
      setTimeout(() => setLoading(false), 5000);
      };
    
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    setCategory(selected);
  };

  const handleMinPriceChange = (e) => {
    const value = Number(e.target.value);
    setMinPrice(value);
    if (value > maxPrice) {
      setErrorMessage('Min price should be less than or equal to Max price');
    } else {
      setErrorMessage('');
    }
    setPriceRange([value, maxPrice]);
  };

  const handleMaxPriceChange = (e) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    if (value < minPrice) {
      setErrorMessage('Max price should be greater than or equal to Min price');
    } else {
      setErrorMessage('');
    }
    setPriceRange([minPrice, value]);
  };

  const handleNameChange = useCallback(
    debounce((e) => {
      const name = e.target.value;
      setSearchName(name);
      setName(name);
    }, 4000),
    []
  );

  const clearFilters = () => {
    setSelectedCategory('');
    setMinPrice(0);
    setMaxPrice(0);
    setSearchName('');
    setCategory('');
    setPriceRange([0, 4000]);
    setName('');
    setErrorMessage('');
  };

  return (
    <div className="sticky top-[150px] w-full sm:w-60 ">
      {loading ? (
        <div className="bg-gray-300 animate-pulse shadow-2xl h-fit px-10 py-8 rounded-xl border w-full ml-4 sm:w-60 pb-56 ">
          <div className="h-6 bg-gray-400 rounded mb-4"></div>
          <div className="h-4 bg-gray-400 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-400 rounded mb-4"></div>
          <div className="h-6 bg-gray-400 rounded mb-2"></div>
          <div className="h-4 bg-gray-400 rounded mb-4 w-3/4"></div>
          <div className="h-6 bg-gray-400 rounded mb-2"></div>
        </div>
      ) : (
        <div className="bg-orange-200 shadow-2xl h-fit px-10 py-8 rounded-xl border w-full sm:w-60 sm : ml-4 sm:mr-10 ">
          <h2 className="text-2xl text-black font-bold mb-4">Filter</h2>
          <div className="mb-4">
            <h3 className="font-bold text-black mb-2">Category</h3>
            <select
              className="w-full bg-orange-100 text-black border rounded-xl py-1 p-2"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {categories.slice(0, 5).map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-black mb-2">Search by Name</h3>
            <input
              type="text"
              className="w-full bg-orange-100 text-black border rounded-xl py-1 p-2"
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value);
                handleNameChange(e);
              }}
              placeholder="Search by name"
            />
          </div>
          <div className="mb-4">
            <h3 className="font-bold text-black mb-2">Price Range</h3>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-black">Min Price: ${minPrice}</label>
              <input
                type="range"
                className="w-full"
                value={minPrice}
                min="0"
                max={4000}
                onChange={handleMinPriceChange}
              />
              <label className="text-sm text-black">Max Price: ${maxPrice}</label>
              <input
                type="range"
                className="w-full"
                value={maxPrice}
                min="0"
                max={4000}
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
          {errorMessage && (
            <div className="text-red-600 font-bold mb-4">
              {errorMessage}
            </div>
          )}
          <div className="flex justify-center">
            <button
              onClick={clearFilters}
              className="w-20 bg-red-600 text-white py-2 rounded-xl mt-4"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
