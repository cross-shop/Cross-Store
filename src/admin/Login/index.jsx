import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin123@#') {
      sessionStorage.setItem('token', 'fake-token'); 
      navigate('/admin');
    } else {
      alert('Email же пароль туура эмес!');
    }
  };

  return (
    <form onSubmit={handleLogin} autoComplete="off"> 
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="off" 
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="new-password" 
      />
      <button type="submit">Кирүү</button>
    </form>
  );
}
