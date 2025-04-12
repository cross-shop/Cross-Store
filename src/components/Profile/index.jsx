import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    setUser(currentUser);
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/register");
    } catch (error) {
      console.error("Чыгууда ката кетти:", error);
    }
  };

  return (
    <div className="profile-container">
      {user ? (
        <div>
          <h2>Добро пожаловать, {user.displayName || "Пользователь"}!</h2>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout} className="logout-btn">
            Выйти
          </button>
          <a href="/">home</a>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}

export default Profile;
