import React, { useState } from "react";
import "./AuthForm.css";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  function handler(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }

  async function signup() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      toast.success("Ийгиликтүү катталдыңыз!");
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  async function login() {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      toast.success("Ийгиликтүү кирдиңиз!");
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "войти" : "регистрация"}</h2>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            isLogin ? login() : signup();
          }}
        >
          {!isLogin && (
            <div className="input-group">
              <label>ваше имя</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handler}
                placeholder="имя"
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
            <label>пароль</label>
            <input
              onChange={handler}
              value={user.password}
              name="password"
              type="password"
              placeholder="пароль"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            {isLogin ? "войти" : "регистрация"}
          </button>
        </form>

        <p className="toggle-text" onClick={toggleForm}>
          {isLogin ? "регистрация?" : "войти"}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
