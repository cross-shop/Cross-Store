// AuthForm.jsx
import React, { useState } from "react";
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

  function handler(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function signup() {
    if (!user.email || !user.password || !user.name) {
      toast.error("Бардык талааларды толтуруңуз.");
      return;
    }

    setLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("Каттоо ийгиликтүү:", res.user);

      toast.success("Ийгиликтүү катталдыңыз!");

      setTimeout(() => {
        navigate("/profile"); // профил баракчага өтөт
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
      toast.error("Email жана сырсөздү толтуруңуз.");
      return;
    }

    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      console.log("Кирүү ийгиликтүү:", res.user);

      toast.success("Кош келиңиз!");

      setTimeout(() => {
        navigate("/profile"); // логин болгондо башка баракча
      }, 2000);
    } catch (error) {
      console.error("Кирүү ката:", error);
      toast.error("Email же сырсөз туура эмес.");
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
        <h2>{isLogin ? "Кирүү" : "Катталуу"}</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            isLogin ? login() : signup();
          }}
        >
          {!isLogin && (
            <div className="input-group">
              <label>Атыңыз</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handler}
                placeholder="Атыңыз"
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
            <label>Сырсөз</label>
            <input
              onChange={handler}
              value={user.password}
              name="password"
              type="password"
              placeholder="Сырсөз"
              required
            />
          </div>

          <button type="submit" className="auth-button" disabled={loading}>
            {loading ? "Күтүңүз..." : isLogin ? "Кирүү" : "Катталуу"}
          </button>
        </form>

        <p className="toggle-text" onClick={toggleForm}>
          {isLogin ? "Каттала элексизби?" : "Катталгансызбы? Кирүү"}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthForm;
