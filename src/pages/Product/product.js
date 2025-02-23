import React, { useEffect } from "react";
import { useState } from "react";
import { FakeStoreApi } from "../../Services/service";
import { Link, useParams } from "react-router-dom";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useCart } from "../../Context/Context";

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();
  const { productid } = useParams();

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const product = await FakeStoreApi.fetchProductById(productid);
      setProduct(product);
      setLoading(false);
    };
    fetchProduct().catch(console.error);
  }, [productid]);

  if (!loading && !product) {
    return (
      <div className="container mx-auto flex justify-center items-center h-screen">
        <div className="max-w-md py-8 px-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product not found
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any products matching your search. Please visit{" "}
            <Link to="/" className="text-blue-500 hover:underline" replace>
              home
            </Link>{" "}
            to see all available products.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div>
        {loading ? (
          <div className="loader" />
        ) : (
          <div className="flex justify-center  m-8 p-2 border-2 shadow-xl shadow-inner">
            <div className="w-1/4 m-4">
              <img src={product.image} className="w-48" alt="product"></img>
            </div>
            <div className="w-1/2  m-4 px-2 ">
              <div className="leading-6 ">
                <h3 className="font-bold  text-blue-700">{product.title}</h3>
                <p>{product.description}</p>
              </div>
              <div className=" flex justify-between mt-8 text-2xl text-gray-700">
                <span>${product.price}</span>
                <button
                  className="btn btn-secondary "
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  <ShoppingCartSharpIcon
                    sx={{ fontSize: 40 }}
                    className="text-blue-700 "
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Product };
