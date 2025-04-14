import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function AdminDashboard({ userName }) {
  const navigate = useNavigate();

  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      navigate("/adminlogin");
    }
  };

  return (
    <div className="dashboard">
      <nav>
        <ul className="dul">
          <li>Welcome, {userName}</li>
          <li>
            <a href="/addproduct">add-product</a>
          </li>
          <li>
            <a href="/productlist">products-page</a>
          </li>
          <li>
            <a href="/">home-client</a>
          </li>
          <li>
            <button onClick={confirmLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminDashboard;
