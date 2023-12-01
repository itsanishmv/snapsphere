import React from "react";
import "./signup.css";
import { useState } from "react";
import { auth } from "../firebase";
import { Link } from "react-router-dom";
import LoginPage from "../login/LoginPage";

const signUp = () => {
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState("");

  const createAccount = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((authuser) => {
        authuser.user.updateProfile({
          displayName: Username,
        });
        setUser(authuser.user);
      })
      .catch((error) => setError(error.message));
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      {user ? (
        <LoginPage />
      ) : (
        <div className="signup__wrapper">
          <div className="right__form">
            <form className="signup__form">
              <img className="insta__logo" src="./snapsphere.svg" alt="logo" />
              {error && <p className="error__message">{error}</p>}
              <input
                className="name"
                type="text"
                placeholder="enter Email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                className="name"
                type="text"
                placeholder="enter username"
                value={Username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <input
                className="password"
                type="password"
                placeholder="enter passsword"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />

              <button
                className="signup__button"
                type="submit"
                onClick={createAccount}
              >
                {" "}
                Sign up
              </button>
            </form>
            <div className="login__signup">
              <p className="signup__text">
                {" "}
                Have an account?
                <Link
                  style={{ textDecoration: "none" }}
                  className="link__login"
                  to="/"
                >
                  {" "}
                  Log In{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
      {user && ""}
    </div>
  );
};
export default signUp;
