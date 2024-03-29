/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCart } from "../store/slices/cartSlice";
export const Product = ({ productData }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };
  const handleRemoveCart = () => {
    dispatch(removeCart(productData.id));
  };

  return (
    <div>
      <div className="w-[300px] rounded-md border">
        <img
          src={productData.image}
          alt="Laptop"
          className="h-[180px] w-full rounded-t-md p-2 object-contain"
        />
        <div className="px-4 py-2">
          <div className="mt-1 text-sm text-gray-600">
            {productData.title.substr(0, 30)}...
          </div>
          <div>Price: ${productData.price}</div>
          <button
            type="button"
            className="mt-1 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={
              cart.some((item) => item.id === productData.id)
                ? handleRemoveCart
                : handleAddToCart
            }
          >
            {cart.some((item) => item.id === productData.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
