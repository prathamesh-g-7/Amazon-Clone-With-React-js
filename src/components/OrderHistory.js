import React, { useEffect, useState } from "react";
import Orders from "./Orders";
import "./OrderHistory.css";
import { useStateContextValue } from "../context/StateProvider";
import db from "../Firebase/Firebase";

function OrderHistory() {
  const [{ user }] = useStateContextValue();
  const [ordersData, setOrdersData] = useState([{}]);
  const [count, setCount] = useState(0);
  const [address, setAddress] = useState([]);

  const removeFromOrders = (id) => {
    db.collection("orders").doc(id).delete();
    console.log("deleted");
  };

  const addCount = () => {
    setCount((cnt) => cnt + 1);
  };

  useEffect(() => {
    db.collection("orders").onSnapshot((snapshot) =>
      setOrdersData(snapshot.docs.map((doc) => doc.data()))
    );

    db.collection("address").onSnapshot((snap) =>
      snap.docs.map((doc) =>
        doc.data().userId === user?.uid ? setAddress(doc.data()) : ""
      )
    );

    setTimeout(() => {
      ordersData.map((order) =>
        order.productUserId === user?.uid ? addCount() : ""
      );
    }, 2000);
  }, []);

  return (
    <div className="orderhistory">
      <Orders />
      <div className="orderhistory_mainDiv">
        <div className="orderhistory_mainDivHead">
          <section>
            <h5>Orders Placed</h5>
            <p>{count}</p>
          </section>
          {/* <section>
            <h5>total</h5>
            <p></p>
          </section> */}
          <section>
            <h5>ship to</h5>
            <p>
              {/* {ordersData?.userCity} {ordersData?.userPin} */}

              {address ? address?.city : "Your Location"}
            </p>
          </section>
          <div>
            {/* <h5>Order #{ordersData?.orderId}</h5> */}
            <p>View Details</p>
          </div>
        </div>
        <div className="orderhistory_mainDivTail">
          <div className="orderhistory_mainDivTail_orders">
            {ordersData.map((order) =>
              order.productUserId === user?.uid ? (
                <>
                  <div className="displayflex">
                    <img src={order.productUrl} alt="" />
                    <div className="price">
                      <h2>{order.productTitle}</h2>
                      <h3>${order.productPrice}</h3>
                    </div>
                    <div className="displayflex_btn">
                      <button>Write Product Review</button>
                      <button onClick={() => removeFromOrders()}>
                        Remove From Orders
                      </button>
                    </div>
                  </div>
                  <hr />
                </>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
