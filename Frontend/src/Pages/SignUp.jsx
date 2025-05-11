 // File: src/pages/Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (form.password !== form.confirmPassword)
      return alert("Passwords don't match");

    const users = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...users, form]));
    alert('Signup successful');
    navigate('/login');
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
        type="email"
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="w-full p-2 border"
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <input
        className="w-full p-2 border"
        type="password"
        placeholder="Confirm Password"
        onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
