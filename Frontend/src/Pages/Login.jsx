 // File: src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matched = users.find(
      user => user.username === form.username && user.password === form.password
    );
    if (matched) {
      localStorage.setItem('loggedInUser', JSON.stringify(matched));
      navigate('/products');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-24 space-y-4">
      <input
        className="w-full p-2 border"
        placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })}
        required
      />
      <input
        className="w-full p-2 border"
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
};

export default Login;
