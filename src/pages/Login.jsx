import axios from "axios";
import React, { useContext, useState } from "react";
import { data, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState([]);
  const [emailError, setEmailError] = useState([]);
  const [passwordError, setPasswordError] = useState([]);
  const [login, setLogin] = useState([]);
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const navigation = useNavigate();
  let data = {
    username: email,
    password: password,
  };

  const submitValue = async () => {
    if (email.length === 0) {
      setEmailError("Please enter email");
    } else if (email.match(regex)) {
      setEmailError("");
    } else if (email !== regex) {
      setEmailError("Email is not valid");
    }

    if (password.length === 0) {
      setPasswordError("Enter password");
    } else if (password.length === 8) {
      setPasswordError("");
    } else if (password.length !== 8) {
      setPasswordError("Enter 8 character password");
    }

    if (email.match(regex) && password.length === 8) {
      setLogin("login successful");
      navigation("/product");

      document.getElementById("login_form").reset();
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <h2 className="login-label">Login</h2>
              {login && (
                <div id="login-successful" style={{ color: "green" }}>
                  {login}
                </div>
              )}
              <form id="login_form">
                <div className="Email-box ">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label Email-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control Email-input"
                    onChange={(e) => setEmail(e.target.value)}
                    id="login-email"
                    placeholder="Enter Email"
                    required
                  />
                  {emailError && (
                    <div id="Email-error" style={{ color: "red" }}>
                      {emailError}
                    </div>
                  )}
                </div>
                <div className=" password-box ">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label Password-label"
                  >
                    Password
                  </label>
                  <input
                    type="email"
                    className="form-control Password-input"
                    onChange={(e) => setPassword(e.target.value)}
                    id="login-passowrd"
                    placeholder="Enter Password"
                    required
                  />
                  {passwordError && (
                    <div id="Password-error" style={{ color: "red" }}>
                      {passwordError}
                    </div>
                  )}
                </div>
              </form>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-dark"
                  onClick={submitValue}
                >
                  continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
