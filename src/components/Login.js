import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth, provider } from "../Firebase/Firebase";
import { useStateContextValue } from "../context/StateProvider";

function Login() {
  //
  //
  const [{ user }, dipatch] = useStateContextValue();

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); //this stop refresh

    auth
      // .signInWithEmailAndPassword(email, password)
      .signInWithPopup(provider)
      .then((result) => {
        //logged in redirect to home page
        let userr = result.user;
        console.log("userr >>>>>", userr);

        dipatch({
          type: "SET_USER",
          user: userr,
        });

        history.push("/");
      })
      .catch((e) => alert(e.messsage));
  };

  const loginWithEmail = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        dipatch({
          type: "SET_USER",
          user: auth.user,
        });
        history.push("/");
      })
      .catch((e) => alert(e.messsage));
  };

  const register = (e) => {
    e.preventDefault(); //this stop refresh
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //create a user and login... redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.messsage));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>

        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login_signinButton"
            onClick={loginWithEmail}
          >
            Sign In
          </button>
          <button type="submit" className="login_signinButton" onClick={login}>
            Sign In With Google
          </button>
        </form>
        <p>
          By using Amazon Services you agree to our use of your personal
          information (including sensitive personal information) in accordance
          with this Privacy Notice, as may be amended from time to time by us at
          our discretion.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
