import React, { useState, useEffect } from "react";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  // Админ логин болсо, админ панелге багыттоо
  useEffect(() => {
    const role = localStorage.getItem("role");
    const userType = localStorage.getItem("userType");
    const token = localStorage.getItem("token");
    
    if (role === "admin" && userType === "admin" && token) {
      navigate("/admin");
    }
  }, [navigate]);

  function handler(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function signup() {
    if (!user.email || !user.password || !user.name) {
      toast.error("Пожалуйста, заполните все поля.");
      return;
    }

    // Check if trying to register as admin
    if (user.email === 'admin@gmail.com') {
      toast.error("Этот email зарезервирован для администратора.");
      return;
    }

    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("Регистрация прошла успешно:", res.user);

      // Set client role
      localStorage.setItem('userType', 'client');
      localStorage.setItem('role', 'client');
      localStorage.setItem('userName', user.name);

      toast.success("Вы успешно зарегистрировались!");

      setTimeout(() => {
        navigate("/profile"); 
      }, 2000);
    } catch (error) {
      console.error("Каттоо ката:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function login() {
    if (!user.email || !user.password) {
      toast.error("Введите свой адрес электронной почты и пароль.");
      return;
    }

    // Check if trying to login as admin
    if (user.email === 'admin@gmail.com') {
      toast.error("Для входа в админ панель используйте специальную форму.");
      return;
    }

    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("Вход успешен:", res.user);

      // Set client role
      localStorage.setItem('userType', 'client');
      localStorage.setItem('role', 'client');

      toast.success("Добро пожаловать!");

      setTimeout(() => {
        navigate("/profile"); 
      }, 2000);
    } catch (error) {
      console.error("Кирүү ката:", error);
      toast.error("Неверный адрес электронной почты или пароль.");
    } finally {
      setLoading(false);
    }
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUser({ name: "", email: "", password: "" });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Войти" : "Регистрация"}</h2>
        <p className="auth-subtitle">Клиент аккаунты үчүн</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            isLogin ? login() : signup();
          }}
        >
          {!isLogin && (
            <div className="input-group">
              <label>Ваше имя</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handler}
                placeholder="Ваше имя"
                required
              />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input
              onChange={handler}
              value={user.email}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="input-group">
            <label>Пароль</label>
            <input
              onChange={handler}
              value={user.password}
              name="password"
              type="password"
              placeholder="Пароль"
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Пожалуйста, подождите" : isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>

        <p className="toggle-text" onClick={toggleForm}>
          {isLogin ? "Зарегистрироваться" : "Войти"}
        </p>
        
        <div className="auth-footer">
          <p>Админ болсоңуз, <a href="/adminlogin">админ панелине</a> кириңиз</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthForm;
