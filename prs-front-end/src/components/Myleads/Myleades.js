import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";
import "./myleads.css";

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

export default function Myleads() {
  const navigate = useNavigate();
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to handle the details button click
  const detailsbtn = (lead) => {
    const leadDetails = {
      id: lead.id,
      full_name: lead.full_name,
      company_name: lead.company_name,
      lead_status: lead.lead_status,
      service_type: lead.service_type,
      follow_up_date: lead.follow_up_date,
      budget: lead.budget,
      created_at: lead.created_at,
    };

    navigate("/details", { state: { leadDetails } });
  };

  // Fetch leads from API
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const partnerEmail = localStorage.getItem("partnerEmail");

        const response = await axios.post("http://localhost:4000/leads", {
          email: partnerEmail,
        });

        setLeads(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  // If data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // If there is an error fetching data
  if (error) {
    return <div>{error}</div>;
  }

  // Prepare data for pie charts
  // 1. Lead Status Pie Chart
  const leadStatusData = {
    labels: ["New", "Contacted", "Unqualified", "Qualified"],
    datasets: [
      {
        label: "Lead Status",
        data: [
          leads.filter((lead) => lead.lead_status === "New").length,
          leads.filter((lead) => lead.lead_status === "Contacted").length,
          leads.filter((lead) => lead.lead_status === "Unqualified").length,
          leads.filter((lead) => lead.lead_status === "Qualified").length,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "red", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  // 2. Service Type Pie Chart
  const serviceTypeData = {
    labels: ["Website Development", "Digital Marketing", "Bussiness Insights"],
    datasets: [
      {
        label: "Service Type",
        data: [
          leads.filter((lead) => lead.service_type === "Website Development")
            .length,
          leads.filter((lead) => lead.service_type === "Digital Marketing")
            .length,
          leads.filter((lead) => lead.service_type === "Bussiness Insights")
            .length,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Your Referrals</h1>

      <div className="charts">
        <div className="pie-chart">
          <h3>Referral Status Distribution</h3>
          <div className="chart">
            <Pie data={leadStatusData} />
          </div>
        </div>

        <div className="pie-chart">
          <h3>Service Type Distribution</h3>
          <div className="chart">
            <Pie data={serviceTypeData} />
          </div>
        </div>
      </div>

      <div className="row">
        {leads.map((lead) => (
          <div className="col-md-4 mb-4" key={lead.id}>
            <div className="myCard">
              <h5>Customer: {lead.full_name}</h5>
              <div className="name mb-1">
                <strong>Company: </strong>
                {lead.company_name}
              </div>

              <div className="status mb-1">
                <strong>Status:</strong> {lead.lead_status}
              </div>

              <div className="service_type mb-1">
                <strong>Service Type:</strong> {lead.service_type}
              </div>

              <div className="followUp mb-1">
                <strong>Follow up date: </strong>
                {lead.follow_up_date}
              </div>
              <div className="Details mt-4">
                <button
                  className="details"
                  onClick={() => {
                    detailsbtn(lead);
                  }}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
