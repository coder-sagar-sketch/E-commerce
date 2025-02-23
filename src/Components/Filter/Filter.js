// import React, { useEffect, useState } from "react";
// import { useNavigate, useSearchParams, Link } from "react-router-dom";
// import { FakeStoreApi } from "../../Services/service";
// import { Items } from "../../Components/Items/items";
// import { useCart } from "../../Context/Context";
// import { Button, TextField } from "@mui/material";
// import { RiMenu2Fill } from "react-icons/ri";
// import { FaAngleDown } from "react-icons/fa6";
// import { GoRocket } from "react-icons/go";

// const Filter = () => {
//   const [loading, setLoading] = useState(true);
//   const [products, setProducts] = useState([]);
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);
//   const [search, setSearch] = useState("");
//   const [queryParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const searchQuery = queryParams.get("q");

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const fetchedProducts = await FakeStoreApi.fetchAllProduct();
//         setData(fetchedProducts);
//         setFilter(
//           searchQuery
//             ? fetchedProducts.filter((item) => item.category === searchQuery)
//             : fetchedProducts
//         );
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchProducts();
//   }, [searchQuery]);

//   const filterProduct = (category) => {
//     navigate(`/?q=${category}`);
//   };

//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearch(value);
//     if (value === "") {
//       setFilter(data);
//     } else {
//       setFilter(
//         data.filter((item) => item.title.toLowerCase().includes(value))
//       );
//     }
//   };

//   const ShowProducts = () => {
//     return (
//       <div className="buttons flex gap-2">
//         <button className="btn btn-online-dark" onClick={() => setFilter(data)}>
//           All
//         </button>
//         <button
//           className="btn btn-online-dark"
//           onClick={() => filterProduct("men's clothing")}
//         >
//           Men's Clothing
//         </button>
//         <button
//           className="btn btn-online-dark"
//           onClick={() => filterProduct("women's clothing")}
//         >
//           Women's Clothing
//         </button>
//         <button
//           className="btn btn-online-dark"
//           onClick={() => filterProduct("electronics")}
//         >
//           Electronics
//         </button>
//       </div>
//     );
//   };

//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="py-2 bg-white shadow-md">
//         <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
//           {/* Left - Shop By Categories */}
//           <div className="w-auto">
//             <Button className="!text-black flex items-center gap-2 font-bold uppercase hover:text-red-500">
//               <RiMenu2Fill className="text-2xl" /> Shop By Categories
//               <FaAngleDown className="text-xl font-semibold" />
//             </Button>
//           </div>

//           {/* Center - Navigation Menu */}
//           <ul className="hidden md:flex items-center gap-6">
//             {loading ? <p>Loading...</p> : <ShowProducts />}
//             {[
//               "Home",
//               "Fashion",
//               "Electronics",
//               "Bags",
//               "Footwear",
//               "Groceries",
//               "Beauty",
//               "Wellness",
//               "Jewellery",
//             ].map((item) => (
//               <li key={item} className="list-none">
//                 <Link
//                   to="/"
//                   className="text-black font-bold uppercase transition hover:text-red-500"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Right - Search Box */}
//           <div className="flex items-center gap-4 w-auto">
//             <TextField
//               label="Search Products..."
//               variant="outlined"
//               size="small"
//               value={search}
//               onChange={handleSearch}
//             />
//             <GoRocket className="text-2xl text-black" />
//             <p className="text-sm font-bold uppercase text-black">
//               Free International Delivery
//             </p>
//           </div>
//         </div>
//       </nav>

//       {/* Product Cards */}
//       <div className="container flex flex-wrap justify-center space-x-8 space-y-8 p-4">
//         {loading ? (
//           <div className="loader" />
//         ) : filter.length > 0 ? (
//           filter.map((product) => (
//             <Items
//               key={product.id}
//               data={product}
//               addToCart={() => addToCart(product)}
//             />
//           ))
//         ) : (
//           <div className="text-center">
//             <h2 className="text-xl font-bold mb-2 text-gray-800">
//               No products found.
//             </h2>
//             <p className="text-gray-600">
//               Try refining your search terms or explore our other categories.
//             </p>
//             <button
//               className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               onClick={() => navigate("/")}
//             >
//               Back to Home
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Filter;
