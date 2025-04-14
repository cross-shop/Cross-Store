import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('token', 'fake-token');
      navigate('/admin');
    } else {
      alert('Email же пароль туура эмес!');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Кирүү</button>
    </form>
  );
}
