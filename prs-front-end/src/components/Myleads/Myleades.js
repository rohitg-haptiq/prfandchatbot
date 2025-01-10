import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Myleads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pemail, setPemail] = useState("");

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const partnerEmail = localStorage.getItem("partnerEmail");

        console.log("*****", partnerEmail);
        const response = await axios.post("http://localhost:4000/leads", {
          email: partnerEmail,
        });
        console.log(response.data);
        setLeads(response.data);

        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Your Partners</h1>
      <div className="row">
        {leads.map((lead) => (
          <div className="col-md-4 mb-4" key={lead.id}>
            <div className="card bg-dark">
              <div className="card-body">
                <h5 className="card-title">{lead.full_name}</h5>
                <p className="card-text ">
                  <strong>Customer Email:</strong> {lead.email}
                </p>
                <p className="card-text">
                  <strong>Phone:</strong> {lead.phone}
                </p>
                <p className="card-text">
                  <strong>Company:</strong> {lead.company_name}
                </p>
                <p className="card-text">
                  <strong>Lead Source:</strong> {lead.lead_source}
                </p>
                <p className="card-text">
                  <strong>Status:</strong> {lead.lead_status}
                </p>
                <p className="card-text">
                  <strong>Priority:</strong> {lead.priority}
                </p>
                <p className="card-text">
                  <strong>Service Type:</strong> {lead.service_type}
                </p>
                <p className="card-text">
                  <strong>Budget:</strong> ${lead.budget}
                </p>
                <p className="card-text">
                  <strong>Follow-up Date:</strong> {lead.follow_up_date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
