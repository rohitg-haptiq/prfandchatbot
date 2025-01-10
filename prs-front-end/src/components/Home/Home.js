import React from "react";

import "./home.css";

export default function home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <h1 className="col-md-6 heading">
            Welcome to the Referral Partner Dashboard
          </h1>
          <div className="row">
            <div className="col-md-6">
              <h4 className="head">Empowering You to Grow with Us</h4>
              <p className="mainText">
                Welcome, partner! You’re just one step away from unlocking a
                world of opportunities. Here on your personalized dashboard, you
                can easily track your referrals, view their status, and stay
                updated on your rewards. Whether you're here to monitor your
                performance or maximize your referrals, we’ve got you covered!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
