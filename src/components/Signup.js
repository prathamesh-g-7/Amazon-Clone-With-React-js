import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth, provider } from "../Firebase/Firebase";
import { useStateContextValue } from "../context/StateProvider";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const signupWithEmail = (e) => {
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
        <h1>Sign Up</h1>

        <form action="">
          <h5>Set Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Set Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="login_signinButton"
            onClick={signupWithEmail}
          >
            Sign Up To Amazon
          </button>
        </form>
        <p>
          By using Amazon Services you agree to our use of your personal
          information (including sensitive personal information) in accordance
          with this Privacy Notice, as may be amended from time to time by us at
          our discretion.
        </p>
      </div>
    </div>
  );
}

export default Signup;
