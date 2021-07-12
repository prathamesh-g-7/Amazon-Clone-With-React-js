import React from "react";
import { Link } from "react-router-dom";
import "./Orders.css";

function Orders() {
  return (
    <div className="orders">
      <div className="orders_header">
        <div className="orders_headerHeading">
          <h3>Your orders</h3>
        </div>
        <div className="orders_headerSearchBox">
          <input type="text" placeholder="Search all orders" />
          <button>Search Orders</button>
        </div>
      </div>
      <div className="orders_menu">
        <Link to="/orderhistory" className="orders_menuLink">
          <h4>Orders</h4>
        </Link>
        <Link to="/buyagain" className="orders_menuLink">
          <h4>Buy Again</h4>
        </Link>
        <Link to="/cancledorder" className="orders_menuLink">
          <h4>Cancelled Orders</h4>
        </Link>
      </div>
      <hr />
    </div>
  );
}

export default Orders;
