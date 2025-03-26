import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/adminlogin");
  };

  return (
    <div>
      <h2>Welcome to Admin Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
