import React, { useState, useEffect } from "react";
import axios from "axios";

import "./profile.css";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    axios
      .get("http://localhost:4000/api/profie", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileData(response.data);
        setLoading(false);
        console.log(profileData);
      })
      .catch((error) => {
        setError("Error fetching profile data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h3>Loading profile...</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid back">
      <div className="col-md-6">
        <h1>Hey {profileData.firstName} </h1>
        <p>
          Welcome back, Every day is a new opportunity to grow and succeed
          together.
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
