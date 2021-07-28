import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateContextValue } from "../context/StateProvider";
import { auth } from "../Firebase/Firebase";
import { Menu } from "@material-ui/icons";
import db from "../Firebase/Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateContextValue();
  const history = useHistory();

  const [city, setCity] = useState("");

  db.collection("address").onSnapshot((snap) =>
    setCity(
      snap.docs.map((doc) =>
        doc.data().userId === user?.uid ? doc.data().city : null
      )
    )
  );

  const login = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
      // history.push("/login");
    }
  };

  const toggle = () => {
    let headerMenu = document.getElementById("h");

    headerMenu.classList.toggle("active");
  };

  return (
    <nav className="header">
      <Menu className="burger_icon" onClick={toggle} />

      {/* Additional Icons and code for responsive design */}

      {/* Header logo */}
      <Link to="/">
        <img
          className="header_logoResponsive"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/* Search box with icon */}
      <div className="header_searchResponsive">
        <input type="text" className="header_searchInputResponsive" />
        <SearchIcon className="header_searchIconResponsive" />
      </div>

      {/* basket logo */}
      <Link to="/checkout" className="header_linkResponsive">
        <div className="header_optionBasketResponsive">
          <ShoppingBasketIcon />
          <span className="heaader_optionLineTwoResponsive header_basketCountResponsive">
            {basket?.length}
          </span>
        </div>
      </Link>

      {/* Additional code end here */}

      <div className="header_responsive" id="h">
        {/* Header logo */}
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {/* Delivery Address */}
        <div className="header_nav">
          <div className="location_iconContainer">
            <RoomIcon className="header_locationIcon" />
          </div>
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="heaader_optionLineOne">Deliver Order To</span>
              <span className="heaader_optionLineTwo">Your Doorestep</span>
            </div>
          </Link>
        </div>

        {/* Search box with icon */}
        <div className="header_search">
          <input type="text" className="header_searchInput" />
          <SearchIcon className="header_searchIcon" />
        </div>

        {/* Header nav links */}
        <div className="header_nav">
          {/* 1st link */}
          <Link to={!user && "/login"} className="header_link">
            <div onClick={login} className="header_option">
              <span className="heaader_optionLineOne">
                Hello{" "}
                {user && (user.displayName ? user.displayName : user.email)}
              </span>
              <span className="heaader_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          {/* 2nd link */}
          <Link to="/orders" className="header_link">
            <div className="header_option">
              <span className="heaader_optionLineOne">Returns</span>
              <span className="heaader_optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/listandaccount" className="header_link">
            <div className="header_option">
              <span className="heaader_optionLineOne">Lists</span>
              <span className="heaader_optionLineTwo">& Account</span>
            </div>
          </Link>

          {/* 3rd link */}
          <Link to="/yourprime" className="header_link">
            <div className="header_option">
              <span className="heaader_optionLineOne">Your</span>
              <span className="heaader_optionLineTwo">Prime</span>
            </div>
          </Link>

          {/* basket logo */}
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="heaader_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
