import "./Dashboard.css"; 

function AdminDashboard({ userName, handleLogout }) {
  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      handleLogout();
    }
  };

  return (
    <div className="dashboard">
      <nav>
        <ul className="dul">
          <li>admin-home</li>
          <li><a href="/addproduct">add-product</a></li>
          <li><a href="/productlist">products-page</a></li>
        <a href="/">home-client</a>
        </ul>
      </nav>
    </div>
  );
}

export default AdminDashboard;
