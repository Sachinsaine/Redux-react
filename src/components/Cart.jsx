/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import emptyCart from "../assets/emptyCart.png";
import { removeCart } from "../store/slices/cartSlice";
import { AddedCarts } from "./AddedCarts";
export const CartData = () => {
  const [totalNoOfCart, setTotalNoOfCart] = useState(0);
  let dispatch = useDispatch;
  const cart = useSelector((state) => state.cart);
  const handleRemoveItem = () => {
    dispatch(removeCart(cart.id));
  };
  useEffect(() => {
    setTotalNoOfCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalNoOfCart);
  return (
    <div>
      {cart && cart.length ? (
        <div className="row">
          <div className="col-8">
            <h2 className="text-center text-uppercase text-orange-600 mt-3">
              Your Cart Items
            </h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center my-2">
              {cart.map((item) => (
                <AddedCarts cartItem={item} />
              ))}
            </div>
          </div>
          <div className="col-4">
            <div
              style={{
                position: "fixed",
                right: "100px",
                // zIndex: "3",
              }}
            >
              <h2 className="text-center text-uppercase mt-3 text-orange-600">
                Your Cart Summary
              </h2>
              <div
                className="my-2 px-5 py-3 mt-4"
                style={{
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <div className="z-3">
                  <h4>Total Item: {cart.length} </h4>
                  <h4>Total Amount: ${totalNoOfCart} </h4>
                  <Link to="/">
                    <button
                      type="button"
                      className="my-2 w-full rounded-sm bg-orange-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Shop More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center my-3 text-orange-600 font-bold">
            Your cart is Empty
          </h1>
          <div
            className="d-grid place-content-center items-center py-5 mx-32"
            style={{
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <img src={emptyCart} alt="" style={{ height: "200px" }} />

            <Link to="/">
              <button
                type="button"
                className="mt-3 w-full rounded-sm bg-black px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
