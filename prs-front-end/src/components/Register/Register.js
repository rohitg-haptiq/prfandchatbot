import React, { useState } from "react";
import axios from "axios";

import "./register.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [mobile, setMobile] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobileNo: mobile,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setSuccess(response.data.message);

      setFirstName("");
      setLastName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setError("");
    } catch (err) {
      setError(
        err.response ? err.response.data.message : "Something went wrong"
      );
      setSuccess("");
    }
  };

  return (
    <div className="container-fluid main">
      <div className="col-md-6">
        <h2 className="mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="regForm">
          <div className="form-group mb-3">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control "
              placeholder="First Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="text"
              name="mobileNo"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="form-control"
              placeholder="Mobile No"
              required
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Password"
              required
            />
          </div>
          <div className="formBtn">
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </div>
        </form>

        {success && <div className="alert alert-success mt-3">{success}</div>}
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </div>
    </div>
  );
}
