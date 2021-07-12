import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Footer from "./components/Footer";
import { useStateContextValue } from "./context/StateProvider";
import { useEffect, useState } from "react";
import { auth } from "./Firebase/Firebase";
import CheckoutAddress from "./components/CheckoutAddress";
import BuyProduct from "./components/BuyProduct";
import Orders from "./components/Orders";
import OrderHistory from "./components/OrderHistory";
import Buyagain from "./components/Buyagain";
import Cancleorder from "./components/Cancleorder";
import db from "./Firebase/Firebase";

function App() {
  const [{ user }, dipatch] = useStateContextValue();
  // const [userid, setUserId] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in..

        dipatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user is logged out...

        dipatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // any clean up operation go in here
      unsubscribe();
    };
  }, []);

  // fetch user id
  // db.collection("orders").onSnapshot((snapshot) =>
  //   setUserId(snapshot.docs.map((doc) => doc.data()))
  // );

  // console.log("userid>", userid);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route exact path="/buyproduct/:addressId">
            <Header />
            <BuyProduct />
          </Route>

          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route exact path="/orderhistory">
            <Header />
            <OrderHistory />
          </Route>

          <Route exact path="/buyagain">
            <Header />
            <Buyagain />
          </Route>

          <Route exact path="/cancledorder">
            <Header />
            <Cancleorder />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
