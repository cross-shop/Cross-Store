import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email === 'admin@gmail.com' && password === 'admin123@#') {
      localStorage.setItem('token', 'admin-token-' + Date.now());
      localStorage.setItem('role', 'admin');
      localStorage.setItem('userType', 'admin');
      navigate('/admin');
    } else {
      setError('Email же пароль туура эмес!');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="loginblock">
        <h2>Админ панели</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Кирүү</button>
        </form>
        <div className="admin-login-footer">
          <p>Клиент болсоңуз, <a href="/register">регистрация</a> жасаңыз</p>
        </div>
      </div>
    </div>
  );
}