import "./Dashboard.css"; // Стиль файлын кошуу

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
          <li>add-product</li>
          <li>products-page</li>
        </ul>
      </nav>
    </div>
  );
}

export default AdminDashboard;
