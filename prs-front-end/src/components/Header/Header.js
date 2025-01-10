import React from "react";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/isLogedInContext";

export default function Header() {
  const { authenticated, logOut } = useAuth();
  console.log(authenticated);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    console.log("called");
    navigate("/");
  };
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          {/* Website name on the left */}
          <Link className="navbar-brand" to="/">
            <div className="logo">
              <span>Partner</span> Referral Portal
            </div>
          </Link>

          {/* Navbar toggler for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links on the right */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link btn btn-outline-dark ${
                      isActive ? "active" : "text-white"
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link btn btn-outline-dark ${
                      isActive ? "active" : "text-white"
                    }`
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              {/* this is for loged in and loged out  */}

              {authenticated ? (
                <>
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link btn btn-outline-dark ${
                          isActive ? "active" : "text-white"
                        }`
                      }
                      to="/myleads"
                    >
                      My Refers
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      className={"nav-link  text-danger fw-bold mx-5"}
                      onClick={handleLogOut}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link btn btn-outline-dark ${
                          isActive ? "active" : "text-white"
                        }`
                      }
                      to="/register"
                    >
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) =>
                        `nav-link btn btn-outline-dark ${
                          isActive ? "active" : "text-white"
                        }`
                      }
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
