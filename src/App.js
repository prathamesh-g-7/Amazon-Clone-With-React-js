import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateContextValue } from "./context/StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase/Firebase";

function App() {
  const [{ user }, dipatch] = useStateContextValue();

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

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
