import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

import Toast from "./Toast";




const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  // const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem(item));
    // setAddedToCart(true);


    
    Toast("Item added to the cart");
    // setTimeout(() => setAddedToCart(false), 2000);
  };
  const cleanUrlString = (url) => {
    if (typeof url === "string") {
      return url.replace(/^\[\"|\"\]$/g, "");
    }
  };

  const truncateDescription = (description, maxLength = 100) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div className="card card-compact bg-base-100 w-full sm:w-80   shadow-xl">
      <figure>
        <img
          src={cleanUrlString(item.images[0])}
          alt="Product"
          className="h-40 sm:h-60 md:h-60 w-full object-cover"
        />
      </figure>
      <div className="card-body bg-white shadow-xl">
        <h2 className="card-title text-black text-lg md:text-xl">
          {item.title}
        </h2>
        <p title={item.description} className="text-black">{truncateDescription(item.description)}</p>
        <p className="text-lg text-black font-medium">{item.category?.name}</p>
        <p className="text-2xl text-black font-medium">${item.price}</p>
        <div className="card-actions justify-end">
          <button
            className="bg-blue-700 p-2 rounded-md hover:scale-110"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
         
          {/* <Toast message="Item added to the cart" isVisible={addedToCart} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
