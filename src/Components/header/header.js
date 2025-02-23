// import React from "react";
// import { Link } from "react-router-dom";
// import { Badge, IconButton, Tooltip } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { IoIosGitCompare } from "react-icons/io";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import Search from "../Search/Search";

// // Define the StyledBadge component
// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#ff5252", // Custom badge background color
//     color: "white", // Badge text color
//     right: -3,
//     top: 13,
//     border: `2px solid ${theme.palette.background.paper}`,
//     padding: "0 4px",
//   },
// }));

// const Header = () => {
//   return (
//     <>
//       <header className="w-full bg-white shadow-sm">
//         {/* Top Strip */}
//         <div className="top-strip py-2 border-t border-b border-gray-200">
//           <div className="container max-w-screen-xl mx-auto px-4">
//             <div className="flex items-center justify-between">
//               <div className="coll1 w-1/2">
//                 <p className="text-sm font-bold text-gray-600">
//                   Get up to 50% off new season styles, limited time only
//                 </p>
//               </div>
//               <div className="col2 flex items-center justify-end">
//                 <ul className="flex items-center gap-3">
//                   <li className="list-none">
//                     <Link
//                       to="/"
//                       className="text-sm font-bold text-gray-700 link transition"
//                     >
//                       Help Center
//                     </Link>
//                   </li>
//                   <li className="list-none">
//                     <Link
//                       to="/order-center"
//                       className="text-sm font-bold text-gray-700 link transition"
//                     >
//                       Order Tracking
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Header */}
//         <div className="header py-4 border-b border-gray-200">
//           <div className="container max-w-screen-xl mx-auto px-4 flex items-center justify-between">
//             {/* Logo */}
//             <div className="col1 w-1/4">
//               <Link to="/">
//                 <img src="/logo.png" alt="Logo" className="h-10" />
//               </Link>
//             </div>

//             {/* Search Bar */}
//             <div className="col2 w-2/5">
//               <Search />
//             </div>
//             {/* Right Section */}
//             <div className="col3 w-1/3 flex justify-end items-center">
//               <ul className="flex items-center gap-3">
//                 <li className="list-none">
//                   <Link to="/login" className="link transition text-md font-sm">
//                     Login
//                   </Link>{" "}
//                   |&nbsp;
//                   <Link
//                     to="/register"
//                     className="link transition text-md font-sm"
//                   >
//                     Register
//                   </Link>
//                 </li>

//                 <li>
//                   <Tooltip title="Compare">
//                     <IconButton aria-label="compare">
//                       <StyledBadge badgeContent={4}>
//                         <IoIosGitCompare />
//                       </StyledBadge>
//                     </IconButton>
//                   </Tooltip>
//                 </li>

//                 <li>
//                   <Tooltip title="Wish List">
//                     <IconButton aria-label="favorite">
//                       <StyledBadge badgeContent={4}>
//                         <FavoriteBorderOutlinedIcon />
//                       </StyledBadge>
//                     </IconButton>
//                   </Tooltip>
//                 </li>

//                 <li>
//                   <Tooltip title="Cart">
//                     <IconButton aria-label="cart">
//                       <StyledBadge badgeContent={4}>
//                         <ShoppingCartIcon />
//                       </StyledBadge>
//                     </IconButton>
//                   </Tooltip>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </header>
//       <Filter />
//     </>
//   );
// };

// export default Header;
