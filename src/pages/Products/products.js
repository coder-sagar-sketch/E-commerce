import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FakeStoreApi } from "../../Services/service";
import { Items } from "../../Components/Items/items";
import { useCart } from "../../Context/Context";
import { Button, TextField } from "@mui/material";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [queryParams] = useSearchParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const searchQuery = queryParams.get("q");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await FakeStoreApi.fetchAllProduct();
        setData(fetchedProducts);
        setFilteredProducts(
          searchQuery
            ? fetchedProducts.filter((item) => item.category === searchQuery)
            : fetchedProducts
        );
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchQuery]);

  const filterProduct = (category) => {
    navigate(`/?q=${category}`);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      const query = search.toLowerCase();
      setFilteredProducts(
        query === ""
          ? data
          : data.filter((item) => item.title.toLowerCase().includes(query))
      );
      setSearch(""); // Clear search box after hitting Enter
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <nav className="py-3 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto grid grid-cols-12 items-center gap-4 px-4">
          {/* Left Section (Less Width) */}
          <div className="col-span-2 flex">
            <Button className="!text-black flex gap-2 uppercase hover:text-red-500">
              <RiMenu2Fill className="text-lg" /> Categories
              <FaAngleDown className="text-xl ml-auto font-semibold" />
            </Button>
          </div>

          {/* Center Section (More Width) */}
          <div className="col-span-7 flex justify-center">
            <ul className="flex items-center gap-6">
              <li>
                <button
                  className="transition text-black font-semibold hover:text-red-600"
                  onClick={() => setFilteredProducts(data)}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className="transition text-black font-semibold hover:text-red-600"
                  onClick={() => filterProduct("men's clothing")}
                >
                  Men's Clothing
                </button>
              </li>
              <li>
                <button
                  className="transition text-black font-semibold hover:text-red-600"
                  onClick={() => filterProduct("women's clothing")}
                >
                  Women's Clothing
                </button>
              </li>
              <li>
                <button
                  className="transition text-black font-semibold hover:text-red-600"
                  onClick={() => filterProduct("jewellery")}
                >
                  Jewellery
                </button>
              </li>
              <li>
                <button
                  className="transition text-black font-semibold hover:text-red-600"
                  onClick={() => filterProduct("electronics")}
                >
                  Electronics
                </button>
              </li>
            </ul>
          </div>

          {/* Right Section (Less Width) */}
          <div className="col-span-3 flex items-center gap-3">
            <TextField
              label="Search..."
              variant="outlined"
              size="small"
              value={search}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              className="w-full max-w-xs bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <p className="text-sm font-semibold flex items-center gap-2 uppercase text-black">
              <GoRocket className="text-2xl text-black" />
              Free Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Product Cards */}
      <div className="container mx-auto p-6">
        {loading ? (
          <div className="text-center text-gray-600 text-lg">Loading...</div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-contain p-4"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 truncate">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mt-1">${product.price}</p>
                  <button
                    className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-10">
            <h2 className="text-xl font-bold text-gray-800">
              No products found.
            </h2>
            <p className="text-gray-600">
              Try refining your search terms or explore our other categories.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => navigate("/")}
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { Products };
