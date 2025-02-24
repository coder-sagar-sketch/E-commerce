import React from "react";
import { useCart } from "../../Context/Context";
import { Link } from "react-router-dom";

const SHIPPING_CHARGES = 25;

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const Total = () => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mx-auto my-16 space-x-2">
      {cart.length >= 1 ? (
        <>
          <h1 className="m-6 font-bold text-2xl">Order Summary</h1>
          {cart.map((item) => (
            <div>
              <div
                key={item.product.id}
                className=" border  p-4 mb-4 shadow-md rounded-md"
              >
                <div className="flex justify-center items-center ">
                  <img src={item.product.image} className="w-32" alt="image" />
                  <div className="flex flex-col ml-6">
                    <span className="text-md font-bold text-blue-700 hover:text-blue-500">
                      <Link to={"/product/" + item.product.id}>
                        {item.product.title}
                      </Link>
                    </span>
                    <span className="mt-4 text-lg text-gray-800 font-bold">
                      ${Math.round(item.product.price * item.quantity, 2)}
                    </span>
                  </div>
                  <div className="flex items-center ml-auto">
                    <button
                      className="border border-gray-500 rounded px-2 mr-2"
                      onClick={() => increaseQuantity(item.product.id)}
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="border border-gray-500 rounded px-2 ml-2"
                      onClick={() => decreaseQuantity(item.product.id)}
                    >
                      -
                    </button>
                    <div
                      className="ml-2 cursor-pointer bg-blue-500 rounded-md p-2 text-white hover:bg-blue-400 shadow-xl"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 contents ">
            <div className="payment  p-3 shadow-md rounded-md">
              <h2 className="font-bold text-2xl mt-4 ">Payment Summary</h2>
              <div className="summary py-3 my-2 font-bold">
                <div className="flex py-1 justify-around ">
                  <span>Subtotal:</span>
                  <span className="text-blue-700 ">
                    ${Math.round(Total(), 2)}
                  </span>
                </div>
                <div className="flex py-1 justify-around">
                  <span>Shipping Fee:</span>
                  <span className="text-blue-700">${SHIPPING_CHARGES}</span>
                </div>
                <div className="flex py-1 justify-around mt-8 ">
                  <span>Total:</span>
                  <span className="text-blue-700">
                    ${Math.round(Total() + SHIPPING_CHARGES, 2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto  h-max flex justify-center  h-screen">
          <div className="max-w-md py-8 px-6 bg-white shadow-md rounded-lg">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 7.293a1 1 0 0 1 1.414 0L10 8.586l1.293-1.293a1 1 0 1 1 1.414 1.414L11.414 10l1.293 1.293a1 1 0 1 1-1.414 1.414L10 11.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L8.586 10 7.293 8.707a1 1 0 0 1 0-1.414zM10 2a7 7 0 0 0-5.657 2.843 1 1 0 1 0 1.414 1.414A5 5 0 0 1 10 4a5 5 0 0 1 3.95 1.95 1 1 0 0 0 1.633-1.2A7 7 0 0 0 10 2zm0 16a5 5 0 0 1-3.95-1.95 1 1 0 1 0-1.633 1.2A7 7 0 0 0 10 18a7 7 0 0 0 5.657-2.843 1 1 0 1 0-1.414-1.414A5 5 0 0 1 10 18z"
                />
              </svg>
              <h2 className="text-2xl font-semibold text-gray-800 ml-3">
                Cart is empty
              </h2>
            </div>
            <p className="text-gray-600 mt-4">
              There are no items in your cart. Start shopping now to add
              products.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export { Cart };
