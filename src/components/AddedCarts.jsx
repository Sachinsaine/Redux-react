/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../store/slices/cartSlice";

export const AddedCarts = ({ cartItem }) => {
  let dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeCart(cartItem.id));
  };
  return (
    <div>
      <div className="w-[300px] rounded-md border m-4">
        <img
          src={cartItem.image}
          alt="product-image"
          className="h-[180px] w-full rounded-t-md p-2 object-contain"
        />
        <div className="px-4 py-2">
          <div className="my-2 text-sm text-gray-600">
            {cartItem.title.substr(0, 30)}...
          </div>
          <span className="py-1 px-2 bi bi-star-fill text-white bg-success rounded-sm">
            {cartItem.rating.rate}
          </span>{" "}
          Rating and {cartItem.rating.count} Reviews.
          <div className="my-2">
            Description: {cartItem.description.substr(0, 50)}
          </div>
          <button
            type="button"
            className="my-2 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={handleRemoveItem}
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};
