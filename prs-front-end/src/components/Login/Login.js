import React, { use, useState } from "react";

import "./login.css";
import axios, { Axios } from "axios";

import { useAuth } from "../../context/isLogedInContext";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside handlesubmit");
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email: email,
        password: password,
      });

      console.log(response.data.token);
      localStorage.setItem("jwtToken", response.data.token);
      localStorage.setItem("partnerEmail", email);
      login(response.data.token);

      setError("");
      navigate("/profile");
    } catch (error) {
      console.log(error);
      setError("something Went wrong");
    }
  };

  return (
    <div
      className="container-fluid main
        "
    >
      <div
        className="login col-md-6
    "
      >
        <form className="loginForm">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="formBtn">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}
