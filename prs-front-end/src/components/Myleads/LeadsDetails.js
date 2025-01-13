import React from "react";
import { useLocation } from "react-router-dom";
import "./leaddetails.css";

export default function LeadDetails() {
  const location = useLocation();
  const { leadDetails } = location.state || {};
  console.log("*********", leadDetails);

  if (!leadDetails) {
    return <div>No lead data found.</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Lead Details</h1>
      <div className="element">
        <strong>Customer:</strong> {leadDetails.full_name}
      </div>
      <div className="element">
        <strong>Company:</strong> {leadDetails.company_name}
      </div>
      <div className="element">
        <strong>Status:</strong> {leadDetails.lead_status}
      </div>
      <div className="element">
        <strong>Service Type:</strong> {leadDetails.service_type}
      </div>
      <div className="element">
        <strong>created at :</strong> {leadDetails.created_at}
      </div>
      <div className="element">
        <strong>Follow-up Date:</strong> {leadDetails.follow_up_date}
      </div>
      <div className="element">
        <strong>budget :</strong> RS . {leadDetails.budget}
      </div>
      <div className="element">
        <strong>Your Earning :</strong>
        {" RS . "}
        {leadDetails.budget
          ? (parseInt(leadDetails.budget, 10) * 0.03).toFixed(2)
          : "N/A"}
      </div>
    </div>
  );
}
