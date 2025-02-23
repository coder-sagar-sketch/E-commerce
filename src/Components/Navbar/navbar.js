import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Avatar, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IoIosGitCompare } from "react-icons/io";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useAuth0 } from "@auth0/auth0-react";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { deepOrange } from "@mui/material/colors";
import Filter from "../Filter/Filter";
import Slider from "../Slider/Slider";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#ff5252", // Custom badge background color
    color: "white", // Badge text color
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Navbar = ({ queryUrl, productcount }) => {
  // const [searchquery, setSearchQuery] = useState("");
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   if (searchquery.trim().length) {
  //     queryUrl(searchquery.trim());
  //   }
  //   setSearchQuery("");
  // };

  return (
    <>
      <div className="bg-white-700 top-sticky top-0 z-50 py-2  ">
        <div className="top-strip py-2 border-b border-gray-200">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="coll1 w-1/2">
                <p className="text-sm font-bold text-gray-600">
                  Get up to 50% off new season styles, limited time only
                </p>
              </div>
              <div className="col2 flex items-center justify-end">
                <ul className="flex items-center gap-3">
                  <li className="list-none">
                    <Link
                      to="/"
                      className="text-sm font-bold text-gray-700 link transition"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link
                      to="/order-center"
                      className="text-sm font-bold text-gray-700 link transition"
                    >
                      Order Tracking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <header className="flex justify-around py-4 items-center border-b border-gray-200">
          <div>
            <Link to="/">
              <img src="/logo.png" alt="Logo" className="h-10" />
            </Link>
          </div>
          {/* <div>
            <form className="space-x-2" onSubmit={handleSearch}>
              <input
                type="search"
                className="px-3 py-1 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
                placeholder="Search"
                value={searchquery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 border-1"
                type="submit"
              >
                Search
              </button>
            </form>
          </div> */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Tooltip title="Profile">
                  <IconButton component={Link} to="/profile">
                    <Avatar
                      alt={user.name}
                      src={user.picture}
                      sx={{ bgcolor: deepOrange[500] }}
                    >
                      {!user.picture && user.name.charAt(0)}
                    </Avatar>
                  </IconButton>
                </Tooltip>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </>
            ) : (
              <button
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            )}
            <Link to="/cart">
              <Tooltip title="Compare">
                <IconButton aria-label="compare">
                  <StyledBadge badgeContent={4}>
                    <IoIosGitCompare />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </Link>
            <Link to="/cart">
              <Tooltip title="Wish List">
                <IconButton aria-label="favorite">
                  <StyledBadge badgeContent={4}>
                    <FavoriteBorderOutlinedIcon />
                  </StyledBadge>
                </IconButton>
              </Tooltip>
            </Link>
            <Link to="/cart">
              <Badge
                badgeContent={productcount > 9 ? "9+" : productcount}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#ff5252",
                    color: "white",
                  },
                }}
              >
                <ShoppingCartSharpIcon
                  sx={{ color: "rgba(12, 11, 12, 0.5)" }}
                />
              </Badge>
            </Link>
          </div>
        </header>
      </div>
      <Slider />
    </>
  );
};

export default Navbar;
