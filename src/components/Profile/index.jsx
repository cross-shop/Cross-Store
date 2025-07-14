import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    const userType = localStorage.getItem("userType");
    const role = localStorage.getItem("role");
    
    // Check if user is properly authenticated as client
    if (currentUser && userType === "client" && role === "client") {
      setUser(currentUser);
    } else {
      // Redirect if not proper client
      navigate("/register");
    }
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Clear all client-related data
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("userType");
      localStorage.removeItem("userName");
      navigate("/register");
    } catch (error) {
      console.error("Чыгууда ката кетти:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Добро пожаловать, {localStorage.getItem("userName") || user.displayName || "Пользователь"}!
            </h2>
            <p className="text-gray-600 mb-6">Email: {user.email}</p>
            <p className="text-blue-600 mb-6">Тип аккаунта: Клиент</p>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 mb-4"
            >
              Выйти
            </button>
            <a
              href="/"
              className="inline-block text-blue-600 hover:underline text-sm"
            >
              ⬅️ На главную
            </a>
          </>
        ) : (
          <p className="text-gray-500">Загрузка...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
